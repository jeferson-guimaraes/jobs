import { useState } from "react"
import { ButtonDelete, StyledTable, TableCell, TableHeader, TableRow, TableWrapper } from "./styles"
import InputWithButton from "../InputWithButton"

interface TableProps {
	title: string
	data: string[]
	placeholder?: string
}

const Table = ({ title, data, placeholder = "" }: TableProps) => {
	const [row, setRow] = useState<string[]>(data)

	const addRow = (text: string) => {
		setRow(prevData => [...prevData, text])
	}

	const deleteRow = (indexToDelete: number) => {
		setRow(prevData => prevData.filter((_, index) => index !== indexToDelete))
	}

	return (
		<>
			<InputWithButton onAdd={addRow} placeholder={placeholder} />
			<TableWrapper>
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
		</>
	)
}

export default Table