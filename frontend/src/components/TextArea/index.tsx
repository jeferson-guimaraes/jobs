import { useEffect, useState } from "react";
import { StyledTextArea } from "./styles";

interface TextAreaProps{
	value?: string
	rows?: number
}

const TextArea = ({ value = '', rows}: TextAreaProps) => {
	const [text, setText] = useState<string>(value)

	useEffect(() => {
			setText(value || '')
	}, [value])

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setText(e.target.value)
	}

	return (
		<StyledTextArea
			rows={rows}		
			value={text}
			onChange={handleChange}
		>
		</StyledTextArea>
	)
}

export default TextArea