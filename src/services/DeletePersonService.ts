import { PersonRepository } from "../repositories/person-repository";

interface IRequest{
    id: string,
}

export class DeletePersonService {
    constructor(private personRepository: PersonRepository) {}

    async execute({ id }: IRequest){
        await this.personRepository.delete(id)
    }
}