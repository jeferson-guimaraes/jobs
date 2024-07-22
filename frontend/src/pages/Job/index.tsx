import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { api } from "../../services/api"
import { JobProps } from "../../types/job"

import { Container } from "../../styles/global"
import { Title } from "../Home/styles"

import { MdAttachMoney, MdLocationOn, MdOutlineComputer, MdOutlineWork } from "react-icons/md"
import { FaBuilding } from "react-icons/fa"
import { BiSolidTrashAlt, BiSolidPencil } from "react-icons/bi";
import { SubTitle, JobText, ButtonEdit, ButtonDelete } from "./styles"

const url = import.meta.env.VITE_API

const Job = () => {
  const { id } = useParams<{ id: string }>()
  const [job, setJob] = useState<JobProps | null>(null)

  const getJob = async (url: string) => {
    const res = await api.get(url)
    setJob(res.data)
  }

  useEffect(() => {
    const jobUrl = `${url}/job/${id}`

    getJob(jobUrl)
  }, [])

  return (
    <Container $padding="0 0 4rem 0">
      {job ? (
        <Container>
          <Container display="flex" $justify="space-between" $padding="0">
            <Title>{job.title}</Title>
            <Container  display="flex" $padding="0" $justify="end" width="auto">
              <ButtonEdit to={`/job/edit/${job.id}`}>
                <BiSolidPencil className="buttonIcon" />
                Editar
              </ButtonEdit>
              <ButtonDelete to={'/'}>
                <BiSolidTrashAlt className="buttonIcon" />
                Deletar
              </ButtonDelete>
            </Container>
          </Container>

          <Container $padding="5px 0" display="flex" $textalign="center">
            <FaBuilding className="largeIcon" />
            {job.company}
          </Container>

          <Container $padding="5px 0" display="flex" $textalign="center">
            <MdLocationOn className="largeIcon" />
            {job.location}
          </Container>

          <Container $padding="5px 0" display="flex" $textalign="center">
            <MdAttachMoney className="largeIcon" />
            {job.salary.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}
          </Container>

          <Container $padding="5px 0" display="flex" $textalign="center">
            <MdOutlineWork className="largeIcon" />
            {job.employment_regime}
          </Container>

          <Container $padding="5px 0" display="flex" $textalign="center">
            <MdOutlineComputer className="largeIcon" />
            {job.type}
          </Container>

          <Container $padding="0">
            <SubTitle color="inherit">Descrição:</SubTitle>
            <JobText>
              {job.description}
            </JobText>
          </Container>

          <Container $padding="0">
            <SubTitle color="inherit">Requisitos:</SubTitle>
            <JobText>
              {job.requirements.map((requirement, index) => (
                <li key={index}>{requirement}</li>
              ))}
            </JobText>
          </Container>

          <Container $padding="0">
            <SubTitle color="inherit">Benefícios:</SubTitle>
            <JobText>
            {job.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
            </JobText>
          </Container>
        </Container>
      ) : (
        <div>Carregando ...</div>
      )}
    </Container>
  )
}

export default Job