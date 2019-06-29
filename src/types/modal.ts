export interface ModalState {
  open: boolean
  action?: string
  content: FormModalContent
}

export interface FormModalContent {
  label?: string
  value?: string
}

