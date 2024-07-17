import { FastifyRequest, FastifyReply } from "fastify"
import { z } from "zod"

import { DeletePersonService } from "../../services/DeletePersonService"
import { PrismaPersonRepository } from "../../repositories/prisma-person-respositories"

export async function DeletePerson(request: FastifyRequest, reply: FastifyReply) {
    const deletePersonParamsSchema = z.object({
        id: z.string().uuid()
    })
    const { id } = deletePersonParamsSchema.parse(request.params)

    try {
        const personRepository = new PrismaPersonRepository()
        const deletePersonService = new DeletePersonService(personRepository)

        await deletePersonService.execute({
          id
        })
    } catch (error) {
        return reply.status(409).send
    }

    return reply.status(204).send()
}