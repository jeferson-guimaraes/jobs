import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify"
import { CreateJobController } from "./controllers/CreateJobController"
import { ListJobController } from "./controllers/ListJobController"
import { DeleteJobController } from "./controllers/DeleteJobController"
import { UpdateJobController } from "./controllers/UpdateJobController"
import { ShowJobController } from "./controllers/ShowJobController"

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

  fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
    return { ok: true }
  })

  fastify.get("/jobs", async (request: FastifyRequest, reply: FastifyReply) => {
    return new ListJobController().handle(request, reply)
  })

  fastify.get("/job/:id", async (request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) => {
    return new ShowJobController().handle(request, reply)
  })

  fastify.post("/job", async (request: FastifyRequest, reply: FastifyReply) => {
    return new CreateJobController().handle(request, reply)
  })

  fastify.put("/job", async (request: FastifyRequest, reply: FastifyReply) => {
    return new UpdateJobController().handle(request, reply)
  })

  fastify.delete("/job", async (request: FastifyRequest, reply: FastifyReply) => {
    return new DeleteJobController().handle(request, reply)
  })

}