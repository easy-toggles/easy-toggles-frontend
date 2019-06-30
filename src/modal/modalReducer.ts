import { createReducers } from 'redux-arc'
import * as actions from './modalActions'
import { ModalState } from '../types/modal'

export const initialState: ModalState = {
  open: false,
  title: '',
  fields: []
}

const onOpenModal = (state, { payload: { action, title, fields } }: actions.OpenModalAction) => ({
  ...state,
  open: true,
  action,
  title,
  fields
})

const onCloseModal = (state) => ({
  ...state,
  open: false,
  action: null,
  fields: [],
  title: ''
})

const HANDLERS = {
  [actions.types.OPEN]: onOpenModal,
  [actions.types.CLOSE]: onCloseModal
}

export const modalReducer = createReducers(initialState, HANDLERS)
