import { PersonRepository } from "../repositories/person-repository";

interface IRequest {
    id: string;
    data: {
        name?: string,
        email?: string,
        birthDate?: string,
        gender?: string,
        phoneNumber?: string
    }
}

export class UpdatePersonService {
    constructor(private personRepository: PersonRepository) {}

    async execute({ id, data } : IRequest) {
       const person = await this.personRepository.update(id, data)

       return person
    }
}