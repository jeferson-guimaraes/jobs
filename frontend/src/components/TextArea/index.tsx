import { StyledTextArea } from "./styles";
import { TextAreaProps } from "../../types/textarea";
import { FormGroup, Label } from "../../pages/JobEdit/styles";

const TextArea = ({ defaultValue = '', rows, name, id, register, label}: TextAreaProps) => {

	return (
		<FormGroup>
			<Label>{label}</Label>
			<StyledTextArea
				id={id}
				rows={rows}		
				defaultValue={defaultValue}
				{...register(name)}
			>
			</StyledTextArea>
		</FormGroup>
	)
}

export default TextArea