import { FastifyRequest, FastifyReply } from "fastify"
import { DeleteJobService } from "../services/DeleteJobService"

class DeleteJobController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as { id: string }

    if (!id) {
      throw new Error("parameter: 'id' not found")
    }

    const jobService = new DeleteJobService()

    const job = await jobService.execute({ id })

    reply.send(job)
  }
}

export { DeleteJobController }