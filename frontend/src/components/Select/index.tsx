import { FormGroup, Label } from "../../pages/JobEdit/styles"
import { SelectProps } from "../../types/select"
import { StyledSelect } from "./styles"

const Select = ({ name, options, defaultValue, register, label }: SelectProps) => {

	return (
		<FormGroup>
			<Label>{label}</Label>
			<StyledSelect {...register(name)} defaultValue={defaultValue}>
				{options.map(option => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</StyledSelect>
		</FormGroup>
	)
}

export default Select