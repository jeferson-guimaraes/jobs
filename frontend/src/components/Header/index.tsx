import { useNavigate } from "react-router-dom"
import { SubmitHandler, useForm } from "react-hook-form"
import { useSearch } from "../../contexts/SearchContext"

import { Jumbotrom, Container } from "../../styles/global"
import { Capa, Navbar, LogoLink, ButtonNew, Title, SubTitle } from "./styles"
import { MdOutlineWork } from "react-icons/md"

import { JobsProps } from "../../types/job"
import InputSearch from "../InputSearch"

const Header = ({ jobs }: JobsProps) => {
  const {
    register,
    handleSubmit
  } = useForm()
  const navigate = useNavigate()

  const { setSearchQuery } = useSearch()
  const availableJobs = jobs.filter((job) => job.status)

  const onSubmit: SubmitHandler<any> = async (query) => {
    setSearchQuery(query.jobSearch)
    navigate('/')
  }

  const handleClick = () => {
    setSearchQuery('')
    navigate('/')
  }

  return (
    <Jumbotrom>
      <Capa>
        <Navbar>
          <div>
            <LogoLink onClick={handleClick}>Jobs</LogoLink>
            <ButtonNew to={"/new-job"}>
              <MdOutlineWork className="buttonIcon" />
              Nova Vaga
            </ButtonNew>
          </div>
        </Navbar>
        <Container display="flex">
          <Container height="auto">
            <Title>Encontre um emprego</Title>
            <Container height="auto" display="flex" $padding="0">
              <form onSubmit={handleSubmit(onSubmit)}>
                <InputSearch
                  id="jobSearch"
                  name="jobSearch"
                  placeholder="Título, Palavra Chave ou Empresa"
                  register={register}
                />
              </form>
            </Container>
            <SubTitle>Temos {availableJobs.length} vagas de emprego para você!</SubTitle>
          </Container>
        </Container>
      </Capa>
    </Jumbotrom>
  )
}

export default Header