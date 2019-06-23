export interface ModalState {
  open: boolean
  action?: InputModalActions
  content: InputModalContent
}

export interface InputModalContent {
  label?: string
  value?: string
}

export enum InputModalActions {
  AddFeature = 'addFeature',
  EditFeature = 'editFeature'
}
