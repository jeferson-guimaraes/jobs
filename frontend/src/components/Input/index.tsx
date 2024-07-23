import { FormGroup, Label } from "../../pages/JobEdit/styles"
import { StyledInput } from "./styles"
import { InputProps } from "../../types/input"

const Input = ({ label, id, name, type, register, defaultValue }: InputProps & { defaultValue?: string }) => {

	return (
		<FormGroup>
			<Label>{label}</Label>
			<StyledInput
				id={id}
				type={type}
				{...register(name)}
				defaultValue={defaultValue}
			/>

		</FormGroup>
	)
}

export default Input