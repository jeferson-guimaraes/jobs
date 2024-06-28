import prismaClient from "../prisma"

interface DeleteJobProps {
  id: string
}

class DeleteJobService {
  async execute({ id }: DeleteJobProps) {

    const findJob = await prismaClient.job.findFirst({
      where: {
        id: id
      }
    })

    if (!findJob) {
      throw new Error("Job not found")
    }

    await prismaClient.job.delete({
      where: {
        id: findJob.id
      }
    })

    return { message: "Deletado com sucesso" }

  }

}

export { DeleteJobService }