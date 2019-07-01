import { createReducers } from 'redux-arc'
import produce from 'immer'
import { Application } from '../types/applications'
import * as actions from './applicationsActions'
import { State } from '../store'

export const initialState: { data: Application[] } = {
  data: []
}

const load = (state: State, action: actions.LoadResponseAction) => ({
  ...state,
  data: action.payload.data
})

const add = (state: State, action: actions.AddResponseAction) => {
  return produce(state, (draft) => {
    draft.data.push(action.payload.data)
  })
}

const HANDLERS = {
  [actions.types.LOAD.RESPONSE]: load,
  [actions.types.ADD.RESPONSE]: add
}

export const applicationsReducer = createReducers(initialState, HANDLERS)
