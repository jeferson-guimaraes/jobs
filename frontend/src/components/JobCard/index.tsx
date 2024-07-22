import { JobCardProps } from "../../types/job"
import { MdAttachMoney, MdLocationOn, MdOutlineComputer,MdOutlineWork } from "react-icons/md"
import { FaBuilding } from "react-icons/fa"

import { Card, CardTitle, TextCard } from "./styles"
import { Container } from "../../styles/global"

const JobCard = ({ job }: JobCardProps) => {
  return (
    <Card to={`/job/${job.id}`}>
      <CardTitle>{job.title}</CardTitle>
      
      <TextCard>
        <Container $padding="0" display="flex" $textalign="center">
          <FaBuilding className="cardIcon" />
          {job.company}
        </Container>
      </TextCard>

      <TextCard>
        <Container $padding="0" display="flex" $textalign="center">
          <MdLocationOn className="cardIcon" />
          {job.location}
        </Container>
      </TextCard>

      <TextCard>
        <Container $padding="0" display="flex" $textalign="center">
          <MdAttachMoney className="cardIcon" />
          {job.salary.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}
        </Container>
      </TextCard>

      <TextCard>
        <Container $padding="0" display="flex" $textalign="center">
          <MdOutlineWork className="cardIcon" />
          {job.employment_regime}
        </Container>
      </TextCard>

      <TextCard>
        <Container $padding="0" display="flex" $textalign="center">
          <MdOutlineComputer className="cardIcon" />
          {job.type}
        </Container>
      </TextCard>
      
      <TextCard>
        <Container $padding="5px 0" display="flex">
          {job.summary}
        </Container>
      </TextCard>
    </Card>
  )
}

export default JobCard