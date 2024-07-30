import { useState, useEffect } from "react"
import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import { Main, Jumbotrom, Container } from "./styles/global"

import { JobProps, JobsProps } from "./types/job"
import { api } from "./services/api"

import GlobalStyle from "./styles/global"
import { SearchProvider } from "./contexts/SearchContext"
import { ModalProvider } from "./contexts/ModalContext"

export default function App() {
  const [jobs, setJobs] = useState<JobProps[]>([])

  useEffect(() => {
    loadJobs()
  }, [])

  async function loadJobs() {
    const response = await api.get("/jobs")
    const sortedItemsDescending = response.data.sort((object1: JobProps, object2: JobProps) => {
      return new Date(object2.created_at).getTime() - new Date(object1.created_at).getTime();
    });
    setJobs(sortedItemsDescending)
  }

  const handleJobCreated = async () => {
    loadJobs()
  }

  const contextValue: JobsProps = {
    jobs,
    handleJobCreated
  }

  return (
    <div>
      <GlobalStyle />
      <Main>
        <SearchProvider>
          <ModalProvider>
            <Header jobs={jobs} />
            <Jumbotrom>
              <Container>
                <Outlet context={contextValue} />
              </Container>
            </Jumbotrom>
          </ModalProvider>
        </SearchProvider>
      </Main>
    </div>
  )
}