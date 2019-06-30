import { createActions } from 'redux-arc'
import { Feature, Config } from '../types/project'
import { Field } from '../types/form'

const { types, creators } = createActions('details', {
  toggleFeature: null,
  addFeature: null,
  deleteFeature: null,
  renameFeature: null,
  changeFeature: null,
  addRule: null,
  deleteRule: null,
  addCriteria: null,
  deleteCriteria: null,
  updateCriteriaValues: null,
  renameCriteria: null,
  startPublish: null,
  publish: { url: 'api/applications/:id', method: 'patch' },
  loadConfig: { url: 'api/applications/:id', method: 'get' }
})

export { types, creators }

export interface AddFeatureAction {
  type: typeof types.ADD_FEATURE
  payload: {
    values: {
      [key: string]: string
    },
    fields: Field[]
  }
}

export interface DeleteFeatureAction {
  type: typeof types.DELETE_FEATURE
  payload: {
    path: Array<string | number>
  }
}

export interface ToggleFeatureAction {
  type: typeof types.TOGGLE_FEATURE
  payload: {
    path: Array<string | number>
    data: Feature
  }
}

export interface RenameFeatureAction {
  type: typeof types.RENAME_FEATURE
  payload: {
    values: {
      [key: string]: string
    },
    fields: Field[]
  }
}

export interface ChangeFeatureAction {
  type: typeof types.CHANGE_FEATURE
  payload: {
    name: string
  }
}

export interface AddRuleAction {
  type: typeof types.ADD_RULE
  payload: {
    path: Array<string | number>
  }
}

export interface DeleteRuleAction {
  type: typeof types.DELETE_RULE
  payload: {
    path: Array<string | number>
  }
}

export interface AddCriteriaAction {
  type: typeof types.ADD_CRITERIA
  payload: {
    path: Array<string | number>
  }
}

export interface DeleteCriteriaAction {
  type: typeof types.DELETE_CRITERIA
  payload: {
    path: Array<string | number>
  }
}

export interface RenameCriteriaAction {
  type: typeof types.RENAME_CRITERIA
  payload: {
    path: Array<string | number>
    newValue: string
  }
}
export interface UpdateCriteriaValuesAction {
  type: typeof types.UPDATE_CRITERIA_VALUES
  payload: {
    path: Array<string | number>
    values: string[]
  }
}

export interface LoadConfigResponseAction {
  type: typeof types.LOAD_CONFIG.RESPONSE
  payload: {
    data: {
      application: string
      environment: string
      config: Config
    }
  }
}
