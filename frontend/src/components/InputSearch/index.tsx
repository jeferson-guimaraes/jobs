import { InputWrapper, StyledButton, StyledInput } from "./styles"
import { InputProps } from "../../types/input"
import { BiSearchAlt2 } from "react-icons/bi"

interface InputSearchProps extends Omit<InputProps, "defaultValue" | "label" | "type">  {
	placeholder?: string
}

const InputSearch = ({ id, name, register, placeholder }: InputSearchProps) => {

	return (
		<InputWrapper>
			<StyledInput
				id={id}
				type="search"
				{...register(name)}
				placeholder={placeholder}
			/>
			<StyledButton
				type="submit"
			>
				<BiSearchAlt2 size={20} color="#FFF" />
			</StyledButton>
		</InputWrapper>
	)
}

export default InputSearch