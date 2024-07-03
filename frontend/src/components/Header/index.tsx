import { BiSearchAlt2 } from "react-icons/bi"
import { MdOutlineWork } from "react-icons/md"

import { Jumbotrom, Container } from "../../styles/global"
import { Capa,  Navbar, LogoLink, ButtonNew, Title, SubTitle, InputSearch, ButtonSearch } from "./style"

import { JobsProps } from "../../types/job"

const Header = ({ jobs }: JobsProps) => {

  const availableJobs = jobs.filter((job) => job.status == true)

  return (
    <Jumbotrom>
      <Capa>
        <Navbar>
          <div>
            <LogoLink to={"/"} className="">Jobs</LogoLink>
            <ButtonNew to={"/new-job"}>
              <MdOutlineWork />
              Nova Vaga
            </ButtonNew>
          </div>
        </Navbar>
        <Container display="flex">
          <Container height="auto">
            <Title>Encontre um emprego</Title>
            <Container height="auto" display="flex" padding="0">
              <InputSearch placeholder="Título, Palavra Chave ou Empresa"/>
              <ButtonSearch to={'/'}>
                <BiSearchAlt2 size={20} color="#FFF" />
              </ButtonSearch>
            </Container>
            <SubTitle>Temos {availableJobs.length} vagas de emprego para você!</SubTitle>
          </Container>
        </Container>
      </Capa>
    </Jumbotrom>
  )
}

export default Header