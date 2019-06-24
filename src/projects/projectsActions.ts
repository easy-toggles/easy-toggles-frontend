import { createActions } from 'redux-arc'
import { Project } from '../types/project'

const { types, creators } = createActions('details', {
  loadApplications: { url: 'api/applications', method: 'get' }
})

export { types, creators }

export interface LoadApplicationsResponseAction {
  type: typeof types.LOAD_APPLICATIONS.RESPONSE
  payload: {
    data: Project[]
  }
}
