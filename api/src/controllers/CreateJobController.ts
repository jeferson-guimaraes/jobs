import { FastifyRequest, FastifyReply } from "fastify"
import { CreateJobService } from "../services/CreateJobService"

class CreateJobController {
  async handle(request: FastifyRequest, reply: FastifyReply) {

    const { title, company, location, description, requirements, salary, benefits, type, employment_regime } = request.body as { title: string, company: string, location: string, description: string, requirements: string[], salary: number, benefits: string[], type: string, employment_regime: string }

    if (!title || !company || !location || !description || !requirements || !salary || !benefits || !type || !employment_regime) {
      return reply.status(400).send({ error: 'Preencha todos os campos' });
    }

    const jobService = new CreateJobService()

    const job = await jobService.execute({ title, company, location, description, requirements, salary, benefits, type, employment_regime })

    reply.send(job)
  }
}

export { CreateJobController }