import { createActions } from 'redux-arc'
import { Project } from '../types/project'

const { types, creators } = createActions('projects', {
  loadApplications: { url: 'api/applications', method: 'get' },
  startAdd: null,
  add: { url: 'api/applications', method: 'post' }
})

export { types, creators }

export interface LoadApplicationsResponseAction {
  type: typeof types.LOAD_APPLICATIONS.RESPONSE
  payload: {
    data: Project[]
  }
}

export interface AddProjectResponseAction {
  type: typeof types.ADD.RESPONSE
  payload: {
    data: Project
  }
}