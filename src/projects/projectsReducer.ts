import { createReducers } from 'redux-arc'
import produce from 'immer'
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

const addProject = (state: State, action: actions.AddProjectResponseAction) => {
  return produce(state, (draft) => {
    draft.data.push(action.payload.data)
  })
}

const HANDLERS = {
  [actions.types.LOAD_APPLICATIONS.RESPONSE]: loadApplications,
  [actions.types.ADD.RESPONSE]: addProject
}

export const projectsReducer = createReducers(initialState, HANDLERS)
