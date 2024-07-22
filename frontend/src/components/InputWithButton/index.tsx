import React, { useState } from "react"
import { InputWrapper, StyledButton, StyledInput } from "./styled"

interface InputWithButtonProps {
	onAdd: (text: string) => void
	placeholder?: string
}

const InputWithButton = ({ onAdd, placeholder = "" }: InputWithButtonProps) => {
	const [inputValue, setInputValue] = useState('')

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value)
	}

	const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		if (inputValue.trim()) {
			onAdd(inputValue)
			setInputValue('')
		}
	}

	return (
		<InputWrapper>
			<StyledInput
				type="text"
				placeholder={placeholder}
				value={inputValue}
				onChange={handleInputChange}
			/>
			<StyledButton onClick={handleButtonClick}>Add</StyledButton>
		</InputWrapper>
	)
}

export default InputWithButton