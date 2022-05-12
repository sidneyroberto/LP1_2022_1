import postgres from 'postgres'

const sql = postgres(
  'postgres://postgres:postgres@localhost:5432/exemplopostgres'
)

export const createTables = async () => {
  await sql`
    create table if not exists editor (
      id serial primary key,
      nome varchar not null,
      email varchar not null
    )
  `

  await sql`
      create table if not exists artigo(
        id serial primary key,
        titulo varchar not null,
        conteudo text not null
      )
  `

  await sql`
        create table if not exists editor_artigo(
          id_editor integer not null,
          id_artigo integer not null,
          primary key (id_editor, id_artigo),
          constraint fk_editor
            foreign key (id_editor)
              references editor(id),
          constraint fk_artigo
            foreign key(id_artigo)
              references artigo(id)
        )
  `

  await sql`
        delete from editor_artigo
  `

  await sql`
        delete from editor
  `

  await sql`
        delete from artigo
  `
}

export default sql
