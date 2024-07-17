import { FastifyRequest, FastifyReply } from "fastify"
import { z } from "zod"

import { CreatePersonService } from "../../services/CreatePersonService"
import { PrismaPersonRepository } from "../../repositories/prisma-person-respositories"

export async function CreatePerson(request: FastifyRequest, reply: FastifyReply) {
    const registerBodySchema = z.object({
        name: z.string().min(1),
        email: z.string().email(),
        birthDate: z.string().min(1),
        gender: z.string().min(1),
        phoneNumber: z.string().min(10)
    })

    const { name, email, birthDate, gender, phoneNumber } = registerBodySchema.parse(request.body)

    try {
        const personRepository = new PrismaPersonRepository()
        const createPersonService = new CreatePersonService(personRepository)

        await createPersonService.execute({
            name,
            email,
            birthDate,
            gender,
            phoneNumber
        })
    } catch (error : any) {
        return reply.status(409).send({ message: error.message})
    }

    return reply.status(201).send()
}