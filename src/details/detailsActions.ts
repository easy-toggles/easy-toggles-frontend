import { createActions } from 'redux-arc'
import { Feature, Config } from '../types/application'

const { types, creators } = createActions('details', {
  changeFeature: null,
  addFeature: null,
  addRule: null,
  deleteRule: null,
  addCriteria: null,
  deleteCriteria: null,
  updateCriteriaValues: null,
  renameCriteria: null,
  startPublish: null,
  publish: { url: 'api/applications/:id', method: 'patch'},
  loadConfig: { url: 'api/applications/:id', method: 'get'}
})

export { types, creators }

export interface AddFeatureAction {
  type: typeof types.ADD_FEATURE
  payload: {
    name: string
  }
}

export interface ChangeFeatureAction {
  type: typeof types.CHANGE_FEATURE
  payload: {
    path: Array<string | number>,
    data: Feature
  }
}

export interface RenameCriteriaAction {
  type: typeof types.RENAME_CRITERIA
  payload: {
    path: Array<string | number>,
    newValue: string
  }
}
export interface UpdateCriteriaValuesAction {
  type: typeof types.UPDATE_CRITERIA_VALUES
  payload: {
    path: Array<string | number>,
    values: string[]
  }
}

export interface LoadConfigResponseAction {
  type: typeof types.LOAD_CONFIG.RESPONSE
  payload: {
    data: {
      application: string, 
      environment: string,
      config: Config
    }
  }
}
