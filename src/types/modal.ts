import { Field } from "./form";

export interface ModalState {
  open: boolean
  action?: string
  title: string
  fields: Field[]
}
