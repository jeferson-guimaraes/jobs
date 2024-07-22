import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { SubmitHandler, useForm } from "react-hook-form"

import { api } from "../../services/api"
import { JobProps } from "../../types/job"

import { Container } from "../../styles/global"
import { Title } from "../Home/styles"
import { ButtonSave, Label } from "./styles"
import Table from "../../components/Table/"
import Input from "../../components/Input"
import TextArea from "../../components/TextArea"
import InputMoney from "../../components/InputMoney"

const url = import.meta.env.VITE_API

const JobEdit = () => {
  const { id } = useParams<{ id: string }>()
  const [job, setJob] = useState<JobProps | null>(null)

  const {
    register,
    handleSubmit
  } = useForm()

  const getJob = async (url: string) => {
    const res = await api.get(url)
    setJob(res.data)
  }

  useEffect(() => {
    const jobUrl = `${url}/job/${id}`

    getJob(jobUrl)
  }, [])

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log(data)
  }


  return (
    <Container $padding="0 0 4rem 0">
      {job ? (
        <Container>
          <Title>Editar vaga</Title>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Container width="80%">
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
              
              <InputMoney
                type="text"
                id="salary"
								name="salary"
								label="Salário"
								register={register}
								defaultValue={job.salary}
              />

              <Label>Benefícios</Label>
              <Table title="Benefícios" data={job.benefits} placeholder="Insira um benefício" />

              <Input
                id="summary"
                name="summary"
                type="text"
                register={register}
                label="Resumo"
                defaultValue={job.summary}
              />

              <Label>Descrição</Label>
              <TextArea value={job.description} rows={10} />

              <Label>Requisitos</Label>
              <Table title="Requisitos" data={job.requirements} placeholder="Insira um requisito" />

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