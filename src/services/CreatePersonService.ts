import { PersonRepository } from "../repositories/person-repository"

interface IRequest{
    name: string,
    email: string,
    birthDate: string,
    gender: string,
    phoneNumber: string
}

export class CreatePersonService {
    constructor(private personRepository: PersonRepository) {}

    async execute({ name, email, birthDate, gender, phoneNumber}: IRequest){    
        await this.personRepository.create({
            name,
            email,
            birthDate,
            gender,
            phoneNumber
        })
    }
}
