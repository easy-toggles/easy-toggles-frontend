import { createReducers } from 'redux-arc'
import { ApplicationDetails } from '../types/application'
import * as actions from './detailsActions'
import { State } from '../store'

export const initialState: ApplicationDetails = {
  config: {},
  name: null,
  environment: null
}

const changeFeature = (state: State, action: actions.ChangeFeatureAction) => ({
  ...state,
  config: {
    ...state.config,
    [action.payload.name] : {
      ...action.payload.data
    }
  }
})

const loadConfig = (state: State, action: actions.LoadConfigResponseAction) => ({
  ...state,
  ...action.payload.data
})

const HANDLERS = {
  [actions.types.CHANGE_FEATURE]: changeFeature,
  [actions.types.LOAD_CONFIG.RESPONSE]: loadConfig

}

export const detailsReducer = createReducers(initialState, HANDLERS)
