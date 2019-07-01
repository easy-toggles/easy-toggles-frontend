import { createActions } from 'redux-arc'
import { Application } from '../types/applications'

const { types, creators } = createActions('applications', {
  startAdd: null,
  load: { url: 'api/applications', method: 'get' },
  add: { url: 'api/applications', method: 'post' }
})

export { types, creators }

export interface LoadResponseAction {
  type: typeof types.LOAD.RESPONSE
  payload: {
    data: Application[]
  }
}

export interface AddResponseAction {
  type: typeof types.ADD.RESPONSE
  payload: {
    data: Application
  }
}