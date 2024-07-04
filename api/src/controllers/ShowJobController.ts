import { FastifyRequest, FastifyReply } from "fastify"
import { ShowJobService } from "../services/ShowJobService"

interface JobControllerProps {
	id: string
}

class ShowJobController {
	async handle(request: FastifyRequest<{ Params: JobControllerProps }>, reply: FastifyReply) {
		const { id } = request.params

		if (!id) {
			throw new Error("parameter: 'id' not found")
		}

		const showJob = new ShowJobService()

		const job = await showJob.execute({ id })

		reply.send(job)
	}
}

export { ShowJobController }