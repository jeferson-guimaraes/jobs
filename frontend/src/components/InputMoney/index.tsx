import { useState, ChangeEvent } from 'react';
import { StyledInput } from '../Input/styles'; // Supondo que você tenha um componente de input estilizado
import { FormGroup, Label } from '../../pages/JobEdit/styles'; // Componentes de estilo
import { InputProps } from '../../types/input';

// Função para formatar o valor como moeda
const formatCurrency = (value: string): string => {
	// Remove caracteres não numéricos e formata como moeda
	const number = value.replace(/\D/g, '')
	const formattedNumber = new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	}).format(Number(number) / 100)
	return formattedNumber
}

const formatCurrencyDefaultValue = (value: string): string => {
		const number = parseFloat(value)
		return number.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
}

const InputMoney = ({ label, id, name, register, defaultValue, type = 'text' }: InputProps) => {
	const [currentValue, setCurrentValue] = useState<string>(formatCurrencyDefaultValue(`${defaultValue}`))

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		// Obtém o valor do input
		const inputValue = e.target.value
		// Atualiza o estado com o valor formatado
		setCurrentValue(formatCurrency(inputValue))
	};

	return (
		<FormGroup>
			<Label htmlFor={id}>{label}</Label>
			<StyledInput
				id={id}
				type={type} // Usar "text" ao invés de "number" para permitir a formatação monetária
				{...register(name)}
				value={currentValue}
				onChange={handleChange}
				placeholder="0,00"
			/>
		</FormGroup>
	);
};

export default InputMoney
