import { useOutletContext } from 'react-router-dom';
import { useSearch } from '../../contexts/SearchContext';

import { JobProps, JobsProps } from '../../types/job';
import JobCard from "../../components/JobCard/"
import { Title, CardsContainer } from "./styles"
import { useEffect, useState } from 'react';
import { api } from '../../services/api';

const Home = () => {
  const { jobs } = useOutletContext<JobsProps>()
  const activeJobs = jobs.filter((job) => job.status)
  const inativeJobs = jobs.filter((job) => !job.status)
  const { searchQuery } = useSearch()

  const [jobsSearched, setJobsSearched] = useState<JobProps[]>([])

  async function searchJobs() {
    if (searchQuery) {
      try {
        const response = await api.get('/jobs/search', {
          params: {
            query: searchQuery
          }
        })
        setJobsSearched(response.data)
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    }
  }

  useEffect(() => {
    searchJobs()
  }, [searchQuery])

  return (
    <div className="flex w-full justify-center">
      <div className="w-full md:max-w-6xl">
        {searchQuery != "" &&
          <>
            <Title>Buscado por: <i>{searchQuery}</i></Title>
            {jobsSearched.length > 0 ? (
              <CardsContainer>
                {jobsSearched.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </CardsContainer>
            ) : (
              <p>Nenhuma vaga encontrada</p>
            )}
          </>
        }
        <Title>Confira as vagas em aberto</Title>
        <CardsContainer>
          {activeJobs.length > 0 && activeJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </CardsContainer>
        {inativeJobs.length > 0 && inativeJobs.map((job) => (
          <>
            <Title>Vagas fechadas</Title>
            <CardsContainer>
              <JobCard key={job.id} job={job} />
            </CardsContainer>
          </>
        ))}
      </div>

    </div>
  )
}

export default Home