import { Person, Prisma } from "@prisma/client";

export interface PersonRepository {
    create(data: Prisma.PersonCreateInput): Promise<Person>
    delete(id: string): Promise<Person>
    update(id: string, data: Prisma.PersonUpdateInput): Promise<Person>
    listAll(): Promise<Person[]>
}