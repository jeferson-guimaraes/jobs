import prismaClient from "../prisma"

interface UpdateJobProps {
  id: string
  title: string
  company: string
  location: string
  description: string
  requirements: string[]
  salary: number
  benefits: string[]
  type: string
  employment_regime: string
}

class UpdateJobService {
  async execute({ id, title, company, location, description, requirements, salary, benefits, type, employment_regime }: UpdateJobProps) {
    const updateUser = await prismaClient.job.update({
      where: {
        id: id
      },
      data: {
        title,
        company,
        location,
        description,
        requirements,
        salary,
        benefits,
        type,
        employment_regime,
        status: true
      }
    })

    return updateUser
  }

}

export { UpdateJobService }