export interface JobProps {
  id: string
  title: string
  company: string
  location: string
  summary: string
  description: string
  requirements: string[]
  salary: number
  benefits: string[]
  type: string
  employment_regime: string,
  status: boolean
}

export interface JobCardProps {
  job: JobProps
}

export interface JobsProps {
  jobs: JobProps[]
  handleJobCreated?: () => Promise<void>
}