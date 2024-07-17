import { PersonRepository } from "../repositories/person-repository"

export class ListPeopleService {
    constructor(private personRepository: PersonRepository) {}

    async execute(){
       const people = await this.personRepository.listAll()
    
        return people
    }
}