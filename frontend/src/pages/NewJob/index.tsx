import { SubmitHandler, useForm } from "react-hook-form"
import { Container } from "../../styles/global"
import { Title } from "../Home/styles"
import Input from "../../components/Input"
import InputMoney from "../../components/InputMoney"
import Select from "../../components/Select"
import Table from "../../components/Table/"
import { ButtonSave } from "../JobEdit/styles"
import TextArea from "../../components/TextArea"
import { api } from "../../services/api"
import { useOutletContext } from "react-router-dom"
import { JobsProps } from "../../types/job"

const NewJob = () => {
	const { handleJobCreated } = useOutletContext<JobsProps>();

	const {
		register,
		handleSubmit,
		reset
	} = useForm()

	const getDataTable = ((tableId: string) => {
    const trs = [...document.querySelectorAll(`#${tableId} tbody tr`)].map(tr => {
      return tr.querySelector('td')?.textContent
    })
    return trs
  })

	const removeDataTable = ((tableId: string) => {
    const trs = [...document.querySelectorAll(`#${tableId} tbody tr`)].forEach(tr => {
      return tr.remove()
    })
    return trs
  })

	const onSubmit: SubmitHandler<any> = async (data) => {
    data.benefits = getDataTable('tableBenefits')
    data.requirements = getDataTable('tableRequirements')

    const clanedSalary = data.salary.replace(/[R$\s]/g, '')
    const americanValue = clanedSalary.replace('.','').replace(',', '.')
    data.salary = parseFloat(americanValue)
    
    data.status = true
		
		await api.post(`/job`, data)
    .then(response => {
			if (handleJobCreated) {
				handleJobCreated()
			}
			console.log(response.data)
			reset()
			reset({salary: 'R$ 0,00'})
			removeDataTable('tableBenefits')
			removeDataTable('tableRequirements')

    })
    .catch(error => {
      console.error(error.response.data)
    })
	}

	const typeOptions = [
		{ value: 'Home Office', label: 'Home Office' },
		{ value: 'Presencial', label: 'Presencial' },
		{ value: 'Híbrido', label: 'Híbrido' },
	];

	return (
		<Container $padding="0 0 4rem 0">
			<Container>
				<Title>Nova vaga</Title>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Container width="80%">
						<Input
							id="title"
							name="title"
							type="text"
							register={register}
							label="Título"
						/>

						<Input
							id="company"
							name="company"
							type="text"
							register={register}
							label="Empresa"
						/>

						<Input
							id="location"
							name="location"
							type="text"
							register={register}
							label="Localização"
						/>

						<Input
							id="employment_regime"
							name="employment_regime"
							type="text"
							register={register}
							label="Regime de trabalho"
						/>

						<Select
							name="type"
							options={typeOptions}
							register={register}
							label="Modalidade de trabalho"
						/>

						<InputMoney
							type="text"
							id="salary"
							name="salary"
							label="Salário"
							register={register}
						/>

						<Table
							tableId="tableBenefits"
							id="benefits"
							name="benefits"
							type="text"
							register={register}
							label="Benefícios"
							title="Benefícios"
							placeholder="Insira um benefício"
						/>

						<Input
							id="summary"
							name="summary"
							type="text"
							register={register}
							label="Resumo"
						/>

						<TextArea
							id="description"
							name="description"
							rows={10}
							register={register}
							label="Descrição"
						/>

						<Table
							tableId="tableRequirements"
							title="Requisitos"
							placeholder="Insira um requisito"
							id="requirements"
							name="requirements"
							label="Requisitos"
							register={register}
							type="text"
						/>

						<ButtonSave
							type="submit"
							value={"Salvar"}
						/>
					</Container>
				</form>
			</Container>
		</Container>
	)
}

export default NewJob