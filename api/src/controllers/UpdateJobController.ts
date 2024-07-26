import { FastifyRequest, FastifyReply } from "fastify"
import { UpdateJobService } from "../services/UpdateJobService";

class UpdateJobController {
  async handle(request: FastifyRequest, reply: FastifyReply) {

    const { id, title, company, location, summary, description, requirements, salary, benefits, type, employment_regime, status } = request.body as { id: string, title: string, company: string, location: string, summary:string, description: string, requirements: string[], salary: number, benefits: string[], type: string, employment_regime: string, status:boolean }

    if (!id || !title || !company || !location || !summary || !description || !requirements || !salary || !benefits || !type || !employment_regime || status === undefined) {
      return reply.status(400).send({ error: 'Preencha todos os campos' });
    }
    const jobService = new UpdateJobService()

    const job = await jobService.execute({ id, title, company, location, summary, description, requirements, salary, benefits, type, employment_regime, status })

    reply.send(job)

  }

}

export { UpdateJobController }