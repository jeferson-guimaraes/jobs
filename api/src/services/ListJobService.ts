import prismaClient from "../prisma"

class ListJobService {
  async execute() {
    const recipes = await prismaClient.job.findMany()

    return recipes
  }
}

export { ListJobService }