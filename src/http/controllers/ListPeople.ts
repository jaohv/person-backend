import { FastifyRequest, FastifyReply } from "fastify"

import { ListPeopleService } from "../../services/ListPeopleService"
import { PrismaPersonRepository } from "../../repositories/prisma-person-respositories"

export async function ListPeople(request: FastifyRequest, reply: FastifyReply) {
    try {
        const personRepository = new PrismaPersonRepository()
        const listPeopleService = new ListPeopleService(personRepository)

        const people = await listPeopleService.execute()

        reply.send(people)
    } catch (error) {
        return reply.status(409).send
    }
}