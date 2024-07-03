import { JobCardProps } from "../../types/job"
import { Link } from "react-router-dom"

import { Card, CardTitle } from "../../pages/Home/styles"

const JobCard = ({ job }: JobCardProps) => {
  return (
    <Card to={`/job/${job.id}`}>
      <CardTitle>{job.title}</CardTitle>
      <p>{job.location}</p>
    </Card>
  )
}

export default JobCard