export interface ModalState {
  open: boolean
  action?: string
  content: InputModalContent
}

export interface InputModalContent {
  label?: string
  value?: string
}

