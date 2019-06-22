import { createReducers } from 'redux-arc'
import produce from 'immer'
import { curry, assoc, reduce, keys } from 'ramda'
import { ApplicationDetails } from '../types/application'
import * as actions from './detailsActions'
import { State } from '../store'

export const initialState: ApplicationDetails = {
  config: {},
  name: null
}

const changeFeature = (state: State, action: actions.ChangeFeatureAction) => {
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
  return produce(state, draft => {
    draft.config[payload.name] = {
      enabled: false,
      rules: [],
      dependsOn: [],
      turnsOff: []
    }
  })
}

const addRule = (state: State, { payload }: actions.ChangeFeatureAction) => {
  const [feature, rule] = payload.path

  return produce(state, draft => {
    const rules = draft.config[feature]['rules']
    rules.push({ criteria: []})
  })
}

const addCriteria = (state: State, { payload }: actions.ChangeFeatureAction) => {
  const [feature, rule] = payload.path

  return produce(state, draft => {
    draft.config[feature]['rules'][rule]['criteria'] = []
  })
}

const updateCriteriaValues = (state: State, { payload }: actions.UpdateCriteriaValuesAction) => {
  const [feature, rule, criteria] = payload.path

  return produce(state, draft => {
    draft.config[feature]['rules'][rule][criteria] = payload.values
  })
}


const renameCriteria = (state: State, { payload }: actions.RenameCriteriaAction) => {
  const [feature, rule, criteria] = payload.path

  const renameKeys = curry((keysMap, obj) =>
  reduce((acc, key) => assoc(keysMap[key] || key, obj[key], acc), {}, keys(obj))
  )

  return produce(state, draft => {
    const currentRule = draft.config[feature]['rules'][rule]
    draft.config[feature]['rules'][rule] = renameKeys({ [criteria]: payload.newValue }, currentRule)
  })
}

const deleteRule = (state: State, { payload }: actions.ChangeFeatureAction) => {
  const [feature, rule] = payload.path

  return produce(state, draft => {
    const rules = draft.config[feature]['rules']
    rules.splice(rule, 1)
  })
}

const deleteCriteria = (state: State, { payload }: actions.ChangeFeatureAction) => {
  const [feature, rule, criteria] = payload.path

  return produce(state, draft => {
    delete draft.config[feature]['rules'][rule][criteria]
  })
}

const loadConfig = (state: State, action: actions.LoadConfigResponseAction) => ({
  ...state,
  ...action.payload.data
})

const HANDLERS = {
  [actions.types.CHANGE_FEATURE]: changeFeature,
  [actions.types.ADD_FEATURE]: addFeature,
  [actions.types.ADD_RULE]: addRule,
  [actions.types.DELETE_RULE]: deleteRule,
  [actions.types.ADD_CRITERIA]: addCriteria,
  [actions.types.DELETE_CRITERIA]: deleteCriteria,
  [actions.types.RENAME_CRITERIA]: renameCriteria,
  [actions.types.UPDATE_CRITERIA_VALUES]: updateCriteriaValues,
  [actions.types.LOAD_CONFIG.RESPONSE]: loadConfig
}

export const detailsReducer = createReducers(initialState, HANDLERS)
