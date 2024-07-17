import { FastifyInstance } from "fastify";

import { CreatePerson } from "./controllers/CreatePerson";
import { DeletePerson } from "./controllers/DeletePerson";
import { UpdatePerson } from "./controllers/UpdatePerson";
import { ListPeople } from "./controllers/ListPeople";

export async function appRoutes(app: FastifyInstance) {
    app.post('/person', CreatePerson)
    app.get('/person', ListPeople)
    app.delete('/person/:id', DeletePerson)
    app.put('/person/:id', UpdatePerson)
}