import { createActions } from 'redux-arc'
import { Field } from '../types/form'

const { types, creators } = createActions('modal', {
  open: null,
  close: null,
  confirm: null
})

export { types, creators }

export interface FormModalConfirmAction {
  type: typeof types.CONFIRM
  payload: {
    label: string
    newValue: string
    oldValue?: string
    action: string
  }
}

export interface OpenModalAction {
  type: typeof types.OPEN
  payload: {
    title: string
    fields: Field[]
    action: string
  }
}

export interface CloseModalAction {
  type: typeof types.CLOSE
}
