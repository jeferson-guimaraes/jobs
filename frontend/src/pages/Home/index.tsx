import { useOutletContext } from 'react-router-dom';

import { JobProps } from '../../types/job';
import JobCard from "../../components/JobCard/"
import { Title, CardsContainer } from "./styles"

const Home = () => {
  const jobs  = useOutletContext<JobProps[]>();

  return (
    <div className="flex w-full justify-center">
      <div className="w-full md:max-w-6xl">
        <Title>Confira as vagas em aberto</Title>
        <CardsContainer>
          {jobs.length > 0 && jobs.map( (job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </CardsContainer>
      </div>

    </div>
  )
}

export default Home