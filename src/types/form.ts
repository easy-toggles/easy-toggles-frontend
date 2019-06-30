
export interface Field {
  name: string
  label: string
  value?: string 
  options?: Option[]
}

export interface Option {
  label: string
  value: string
}