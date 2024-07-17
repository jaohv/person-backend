import { FastifyRequest, FastifyReply } from "fastify"
import { z } from "zod"

import { UpdatePersonService } from "../../services/UpdatePersonService"
import { PrismaPersonRepository } from "../../repositories/prisma-person-respositories"

export async function UpdatePerson(request: FastifyRequest, reply: FastifyReply) {
    const updatePersonParamsSchema = z.object({
        id: z.string().uuid()
    })
    const updatePersonBodySchema = z.object({
        name: z.string().min(1).optional(),
        email: z.string().email().optional(),
        birthDate: z.string().min(1).optional(),
        gender: z.string().min(1).optional(),
        phoneNumber: z.string().min(10).optional()
    })

    const { id } = updatePersonParamsSchema.parse(request.params)
    const data = updatePersonBodySchema.parse(request.body)

    try {
        const personRepository = new PrismaPersonRepository()
        const updatePersonService = new UpdatePersonService(personRepository)
        
        const person = await updatePersonService.execute({
            id,
            data
        })

        reply.send(person)
    } catch (error) {
        return reply.status(409).send
    }
}