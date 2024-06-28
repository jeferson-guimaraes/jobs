import { FastifyRequest, FastifyReply } from "fastify";
import { ListJobService } from "../services/ListJobService"

class ListJobController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const listJobService = new ListJobService()

    const jobs = await listJobService.execute()

    reply.send(jobs)
  }

}

export { ListJobController }