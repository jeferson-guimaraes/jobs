import { useState, useEffect } from "react"
import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import { Main, Jumbotrom, Container } from "./styles/global"

import { JobProps } from "./types/job"
import { api } from "./services/api"

import GlobalStyle from "./styles/global"

export default function App() {
  const [jobs, setJobs] = useState<JobProps[]>([])

  useEffect(() => {
    loadJobs()
  }, [])

  async function loadJobs(){
    const response = await api.get("/jobs")
    setJobs(response.data)
  }

  return(
    <div>
      <GlobalStyle />
      <Main>
        <Header jobs={jobs} />
        <Jumbotrom>
          <Container>
            <Outlet context={jobs} />
          </Container>
        </Jumbotrom>
      </Main>
    </div>
  )
}