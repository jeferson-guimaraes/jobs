import prismaClient from "../prisma"

interface CreateJobProps {
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
}

class CreateJobService {
  async execute({ title, company, location, summary, description, requirements, salary, benefits, type, employment_regime }: CreateJobProps) {

    if (!title || !company || !location || !summary || !description || !requirements || !salary || !benefits || !type || !employment_regime) {
      throw new Error("Preencha todos os campos")
    }

    const job = await prismaClient.job.create({
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
        status: true
      }
    })

    return job
  }
}

export { CreateJobService }