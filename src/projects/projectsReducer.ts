import { createReducers } from 'redux-arc'
import { Project } from '../types/project'
import * as actions from './projectsActions'
import { State } from '../store'

export const initialState: { data: Project[] } = {
  data: []
}

const loadApplications = (state: State, action: actions.LoadApplicationsResponseAction) => ({
  ...state,
  data: action.payload.data
})

const HANDLERS = {
  [actions.types.LOAD_APPLICATIONS.RESPONSE]: loadApplications
}

export const projectsReducer = createReducers(initialState, HANDLERS)
