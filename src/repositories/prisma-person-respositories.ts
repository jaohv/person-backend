import { Prisma } from "@prisma/client";

import { prisma } from "../lib/prisma";
import { PersonRepository } from "./person-repository";

export class PrismaPersonRepository implements PersonRepository{
    async create(data: Prisma.PersonCreateInput){
        const person = await prisma.person.create({
            data
        })

        return person
    }

    async delete(id: string){
        const person = await prisma.person.delete({
            where: {
                id
            }
        })

        return person
    }

    async listAll(){
        const people = await prisma.person.findMany()

        return people
    }

    async update(id: string, data: Prisma.PersonUpdateInput){
        const person = await prisma.person.update({
            where: {
                id
            },
            data
        })

        return person
    }
}