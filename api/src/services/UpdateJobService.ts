import prismaClient from "../prisma"

interface UpdateJobProps {
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
  employment_regime: string
  status: boolean
}

class UpdateJobService {
  async execute({ id, title, company, location, summary, description, requirements, salary, benefits, type, employment_regime, status }: UpdateJobProps) {
    const updateUser = await prismaClient.job.update({
      where: {
        id: id
      },
      data: {
        title,
        company,
        location,
        summary,
        description,
        requirements,
        salary,
        benefits,
        type,
        employment_regime,
        status
      }
    })

    return updateUser
  }

}

export { UpdateJobService }