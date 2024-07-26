import { useState } from "react"
import { ButtonDelete, StyledTable, TableCell, TableHeader, TableRow, TableWrapper } from "./styles"
import InputWithButton from "../InputWithButton"
import { FormGroup, Label } from "../../pages/JobEdit/styles"
import { InputProps } from "../../types/input"

interface TableProps extends Omit<InputProps, "defaultValue"> {
	title: string,
	data?: string[],
	tableId: string,
	placeholder?: string
}

const Table = ({ title, data = [], placeholder = "", tableId, label, type, id, name, register }: TableProps) => {
	const [row, setRow] = useState<string[]>(data)

	const addRow = (text: string) => {
		setRow(prevData => [...prevData, text])
	}

	const deleteRow = (indexToDelete: number) => {
		setRow(prevData => prevData.filter((_, index) => index !== indexToDelete))
	}

	return (
		<FormGroup>
			<Label>{label}</Label>
			<InputWithButton onAdd={addRow} placeholder={placeholder} label={label} type={type} id={id} name={name} register={register} />
			<TableWrapper id={tableId}>
				<StyledTable>
					<thead>
						<TableRow>
							<TableHeader colSpan={2}>
								{title}
							</TableHeader>
						</TableRow>
					</thead>

					<tbody>
						{row.map((benefit, index) => (
							<TableRow key={index}>
								<TableCell>
									{benefit}
								</TableCell>
								<TableCell $float="right">
									<ButtonDelete
										onClick={e => {
											e.preventDefault()
											deleteRow(index)
										}}
									>
										Deletar
									</ButtonDelete>
								</TableCell>
							</TableRow>
						))}
					</tbody>
				</StyledTable>
			</TableWrapper>
		</FormGroup>
	)
}

export default Table