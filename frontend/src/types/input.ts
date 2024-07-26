import { UseFormRegister } from "react-hook-form"

export interface InputProps {
	label: string
	id: string
	name: string
	type: string
	register: UseFormRegister<any>
	defaultValue?: string | number
}