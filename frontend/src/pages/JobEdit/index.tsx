import { useState, useEffect } from "react"
import { useOutletContext, useParams } from "react-router-dom"
import { SubmitHandler, useForm } from "react-hook-form"

import { api } from "../../services/api"
import { JobProps, JobsProps } from "../../types/job"

import { Container } from "../../styles/global"
import { Title } from "../Home/styles"
import { ButtonSave } from "./styles"
import Table from "../../components/Table/"
import Input from "../../components/Inputs/Input"
import TextArea from "../../components/TextArea"
import InputMoney from "../../components/Inputs/InputMoney"
import Select from "../../components/Select"

const JobEdit = () => {
  const { id } = useParams<{ id: string }>()
  const [job, setJob] = useState<JobProps | null>(null)
  const { handleJobCreated } = useOutletContext<JobsProps>()

  const {
    register,
    handleSubmit
  } = useForm()

  const getJob = async () => {
    const res = await api.get(`/job/${id}`)
    setJob(res.data)
  }

  useEffect(() => {
    getJob()
  }, [])

  const getDataTable = ((tableId: string) => {
    const trs = [...document.querySelectorAll(`#${tableId} tbody tr`)].map(tr => {
      return tr.querySelector('td')?.textContent
    })
    return trs
  })

  const statusOptions = [
    { value: 'true', label: 'Ativo' },
    { value: 'false', label: 'Inativo' },
  ];

  const typeOptions = [
    { value: 'Home Office', label: 'Home Office' },
    { value: 'Presencial', label: 'Presencial' },
    { value: 'Híbrido', label: 'Híbrido' },
  ];

  const onSubmit: SubmitHandler<any> = async (data) => {
    data.id = id
    data.benefits = getDataTable('tableBenefits')
    data.requirements = getDataTable('tableRequirements')

    const clanedSalary = data.salary.replace(/[R$\s]/g, '')
    const americanValue = clanedSalary.replace('.','').replace(',', '.')
    data.salary = parseFloat(americanValue)
    
    data.status = data.status === 'true'

    await api.put(`/job`, data)
    .then(response => {
      if (handleJobCreated) {
				handleJobCreated()
			}
      console.log(response)
    })
    .catch(error => {
      console.error(error.response.data)
    })
  }


  return (
    <Container $padding="0 0 4rem 0">
      {job ? (
        <Container>
          <Title>Editar vaga</Title>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Container width="80%">
              <Select
                name="status"
                options={statusOptions}
                register={register}
                label="Status da vaga"
                defaultValue={`${job.status}`}
              />

              <Input
                id="title"
                name="title"
                type="text"
                register={register}
                label="Título"
                defaultValue={job.title}
              />

              <Input
                id="company"
                name="company"
                type="text"
                register={register}
                label="Empresa"
                defaultValue={job.company}
              />

              <Input
                id="location"
                name="location"
                type="text"
                register={register}
                label="Localização"
                defaultValue={job.location}
              />

              <Input
                id="employment_regime"
                name="employment_regime"
                type="text"
                register={register}
                label="Regime de trabalho"
                defaultValue={job.employment_regime}
              />

              <Select
                name="type"
                options={typeOptions}
                register={register}
                label="Modalidade de trabalho"
                defaultValue={job.type}
              />

              <InputMoney
                type="text"
                id="salary"
                name="salary"
                label="Salário"
                register={register}
                defaultValue={job.salary}
              />

              <Table
                tableId="tableBenefits"
                id="benefits"
                name="benefits"
                type="text"
                register={register}
                label="Benefícios"
                title="Benefícios"
                data={job.benefits}
                placeholder="Insira um benefício"
              />

              <Input
                id="summary"
                name="summary"
                type="text"
                register={register}
                label="Resumo"
                defaultValue={job.summary}
              />

              <TextArea
                id="description"
                name="description"
                defaultValue={job.description}
                rows={10}
                register={register}
                label="Descrição"
              />

              <Table
                tableId="tableRequirements"
                title="Requisitos"
                data={job.requirements}
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
      ) : (
        <div>Carregando ...</div>
      )}
    </Container >
  )
}

export default JobEdit