import { createReducers } from 'redux-arc'
import { Application } from '../types/application'
import * as actions from './listActions'
import { State } from '../store'

export const initialState: { applications: Application[] } = {
  applications: []
}

const loadApplications = (state: State, action: actions.LoadApplicationsResponseAction) => ({
  ...state,
  applications: action.payload.data
})

const HANDLERS = {
  [actions.types.LOAD_APPLICATIONS.RESPONSE]: loadApplications
}

export const listReducer = createReducers(initialState, HANDLERS)
