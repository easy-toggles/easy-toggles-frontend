import { createReducers } from 'redux-arc'
import * as actions from './modalActions'
import { ModalState } from '../types/modal'

export const initialState: ModalState = {
  open: false,
  content: {}
}

const onOpenModal = (state, { payload: { action, content } }: actions.OpenModalAction) => ({
  ...state,
  open: true,
  action,
  content
})

const onCloseModal = (state) => ({
  ...state,
  open: false,
  action: null,
  content: {}
})

const HANDLERS = {
  [actions.types.OPEN]: onOpenModal,
  [actions.types.CLOSE]: onCloseModal
}

export const modalReducer = createReducers(initialState, HANDLERS)
