import postgres from 'postgres'

const sql = postgres(
  'postgres://postgres:postgres@localhost:5432/exemplopostgres'
)

export const createTables = async () => {
  await sql`
    create table if not exists clients (
      id serial primary key,
      name varchar not null,
      address varchar not null,
      email varchar not null,
      cpf varchar not null,
      code varchar not null
    )
  `

  await sql`
    delete from clients
  `
}

export default sql
