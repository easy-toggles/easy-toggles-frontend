import { createActions } from 'redux-arc'
import { Application } from '../types/application'

const { types, creators } = createActions('details', {
  toggleFeature: null,
  changeApplication: null,
  loadApplications: { url: 'api/applications', method: 'get' }
})

export { types, creators }

export interface LoadApplicationsResponseAction {
  type: typeof types.LOAD_APPLICATIONS.RESPONSE
  payload: {
    data: Application[]
  }
}
