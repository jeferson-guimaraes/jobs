import { FastifyRequest, FastifyReply } from "fastify"
import { ShowJobsService } from "../services/ShowJobsService"


class ShowJobsController {
	async handle(request: FastifyRequest, reply: FastifyReply) {
		const { query } = request.query as { query: string }

		const showJobs = new ShowJobsService()

		const jobs = await showJobs.execute({ query })

		reply.send(jobs)
	}
}

export { ShowJobsController }