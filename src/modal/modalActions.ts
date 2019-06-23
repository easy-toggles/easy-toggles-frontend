import { createActions } from 'redux-arc'
import { InputModalActions } from '../types/modal'

const { types, creators } = createActions('modal', {
  open: null,
  close: null,
  confirm: null
})

export { types, creators }

export interface InputModalConfirmAction {
  type: typeof types.CONFIRM
  payload: {
    label: string
    newValue: string
    oldValue?: string
    action: InputModalActions
  }
}

export interface OpenModalAction {
  type: typeof types.OPEN
  payload: {
    content: {
      label: string
      value?: string
    }
    action: InputModalActions
  }
}

export interface CloseModalAction {
  type: typeof types.CLOSE
}
