import { createReducers } from 'redux-arc'
import produce from 'immer'
import { curry, assoc, reduce, keys, without } from 'ramda'
import { ApplicationDetails } from '../types/applications'
import * as actions from './detailsActions'
import { State } from '../store'

export const initialState: ApplicationDetails = {
  config: {},
  name: null
}

const renameKeys = curry((keysMap, obj) =>
  reduce((acc, key) => assoc(keysMap[key] || key, obj[key], acc), {}, keys(obj))
)

const toggleFeature = (state: State, action: actions.ToggleFeatureAction) => {
  const [feature] = action.payload.path
  return {
    ...state,
    config: {
      ...state.config,
      [feature]: {
        ...action.payload.data
      }
    }
  }
}

const addFeature = (state: State, { payload }: actions.AddFeatureAction) => {
  return produce(state, (draft) => {
    draft.config[payload.values.name] = {
      enabled: false,
      rules: [],
      dependsOn: [],
      turnsOff: []
    }
  })
}

const addRule = (state: State, { payload }: actions.AddRuleAction) => {
  const [feature, rule] = payload.path

  return produce(state, (draft) => {
    const rules = draft.config[feature]['rules']
    rules.push({ criteria: [] })
  })
}

const renameFeature = (state: State, { payload }: actions.RenameFeatureAction) => {
  return produce(state, (draft) => {
    draft.config = renameKeys({ [payload.fields[0].value]: payload.values.name }, draft.config)
  })
}

const changeFeature = (state: State, { payload }: actions.ChangeFeatureAction) => {
  return produce(state, (draft) => {
    draft.current = payload.name === draft.current ? '' : payload.name
  })
}

const addDependency = (state: State, { payload }: actions.AddDependencyAction) => {
  return produce(state, (draft) => {
    const dependsOn = draft.config[draft.current]['dependsOn']
    dependsOn.push(payload.values.name)
  })
}

const deleteDependency = (state: State, { payload }: actions.DeleteDependencyAction) => {
  return produce(state, (draft) => {
    let feature = draft.config[draft.current]
    feature.dependsOn = without([payload.name], feature.dependsOn)
  })
}

const addFeatureToTurnsOff = (state: State, { payload }: actions.AddFeatureToTurnsOffAction) => {
  return produce(state, (draft) => {
    const turnsOff = draft.config[draft.current]['turnsOff']
    turnsOff.push(payload.values.name)
  })
}

const deleteFeatureToTurnsOff = (state: State, { payload }: actions.DeleteFeatureToTurnsOffAction) => {
  return produce(state, (draft) => {
    let feature = draft.config[draft.current]
    feature.turnsOff = without([payload.name], feature.turnsOff)
  })
}

const addCriteria = (state: State, { payload }: actions.AddCriteriaAction) => {
  const [feature, rule] = payload.path

  return produce(state, (draft) => {
    draft.config[feature]['rules'][rule]['criteria'] = []
  })
}

const updateCriteriaValues = (state: State, { payload }: actions.UpdateCriteriaValuesAction) => {
  const [feature, rule, criteria] = payload.path

  return produce(state, (draft) => {
    draft.config[feature]['rules'][rule][criteria] = payload.values
  })
}

const renameCriteria = (state: State, { payload }: actions.RenameCriteriaAction) => {
  const [feature, rule, criteria] = payload.path

  return produce(state, (draft) => {
    const currentRule = draft.config[feature]['rules'][rule]
    draft.config[feature]['rules'][rule] = renameKeys({ [criteria]: payload.newValue }, currentRule)
  })
}

const deleteFeature = (state: State, { payload }: actions.DeleteFeatureAction) => {
  const [feature] = payload.path

  return produce(state, (draft) => {
    delete draft.config[feature]
  })
}

const deleteRule = (state: State, { payload }: actions.DeleteRuleAction) => {
  const [feature, rule] = payload.path

  return produce(state, (draft) => {
    const rules = draft.config[feature]['rules']
    rules.splice(rule, 1)
  })
}

const deleteCriteria = (state: State, { payload }: actions.DeleteCriteriaAction) => {
  const [feature, rule, criteria] = payload.path

  return produce(state, (draft) => {
    delete draft.config[feature]['rules'][rule][criteria]
  })
}

const loadConfig = (state: State, action: actions.LoadConfigResponseAction) => ({
  ...state,
  ...action.payload.data
})

const HANDLERS = {
  [actions.types.TOGGLE_FEATURE]: toggleFeature,
  [actions.types.DELETE_FEATURE]: deleteFeature,
  [actions.types.ADD_FEATURE]: addFeature,
  [actions.types.RENAME_FEATURE]: renameFeature,
  [actions.types.CHANGE_FEATURE]: changeFeature,
  [actions.types.ADD_RULE]: addRule,
  [actions.types.DELETE_RULE]: deleteRule,
  [actions.types.ADD_CRITERIA]: addCriteria,
  [actions.types.DELETE_CRITERIA]: deleteCriteria,
  [actions.types.RENAME_CRITERIA]: renameCriteria,
  [actions.types.UPDATE_CRITERIA_VALUES]: updateCriteriaValues,
  [actions.types.ADD_DEPENDENCY]: addDependency,
  [actions.types.DELETE_DEPENDENCY]: deleteDependency,
  [actions.types.ADD_FEATURE_TO_TURNS_OFF]: addFeatureToTurnsOff,
  [actions.types.DELETE_FEATURE_TO_TURNS_OFF]: deleteFeatureToTurnsOff,
  [actions.types.LOAD_CONFIG.RESPONSE]: loadConfig
}


export const detailsReducer = createReducers(initialState, HANDLERS)
