import { createActions } from 'redux-arc'
import { Feature, Config } from '../types/application'

const { types, creators } = createActions('details', {
  changeFeature: null,
  startPublish: null,
  publish: { url: 'api/applications/:id', method: 'patch'},
  loadConfig: { url: 'api/applications/:id', method: 'get'}
})

export { types, creators }

export interface ChangeFeatureAction {
  type: typeof types.CHANGE_FEATURE
  payload: {
    name: string,
    data: Feature
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
