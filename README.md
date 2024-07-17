# Person (Backend)

Este projeto é um CRUD de pessoas que desenvolvi utilizando os princípios SOLID.

## Tecnologias/Framework
<b>Desenvolvido ultilizando:</b>
- [Node.js](https://nodejs.org/)
- [Fastify](https://fastify.dev/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)

## Funcionalidades

O projeto possui as seguintes funcionalidades:

- Criar uma pessoa
- Editar uma pessoa
- Excluir uma pessoa
- Listar todas as pessoas

## Como instalar
- Abra o seu terminal e digite os seguintes comandos:

```
git clone https://github.com/jaohv/person-backend.git
cd person-backend
npm install
docker compose -up -d
```


## Como usar o projeto

#### 1. Digite os seguinte comandos:

```
npx prisma generate
npx prisma migrate dev
npm run dev
```

#### 2. Abra o cliente de API de sua preferência

Abra o cliente de API de sua preferência (Exemplo: Insomnia, Postman, etc)

#### 3. Crie um HTPP Request para cada uma dos métodos (POST, GET, PUT, DELETE)

Crie um HTPP Request para cada uma dos métodos disponíveis no projeto:

- POST: Cria uma nova pessoa no banco de dados
- GET: Lista todas pessoas existente no banco de dados
- PUT: Atualiza uma pessoa existente no banco de dados
- DELETE: Exclui uma pessoa específica do banco de dados

Certifique-se de preencher corretamente as informações necessárias em cada request, como URL, headers, body, etc.
