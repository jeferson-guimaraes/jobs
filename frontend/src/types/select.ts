import { UseFormRegister } from "react-hook-form"

export interface Option {
  value: string
  label: string
}

export interface SelectProps {
  name: string
  options: Option[]
	register: UseFormRegister<any>
  defaultValue?: string
	label: string
}