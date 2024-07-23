import { UseFormRegister } from "react-hook-form"

export interface TextAreaProps{
	name: string
	id: string
	rows?: number
	register: UseFormRegister<any>
	defaultValue?: string
	label: string
}