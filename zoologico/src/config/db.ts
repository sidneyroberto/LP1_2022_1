import postgres from 'postgres'

import {
  especies,
  especimes,
  jaula_zelador,
  jaulas,
  zeladores,
} from '../data/zoo.json'

const sql = postgres('postgres://dev:senha123@localhost:5432/zoo')

export const createTables = async () => {
  await sql`
    create table if not exists especie (
      id integer not null,
      nome_cientifico varchar not null,
      nome_popular varchar not null,
      habitat varchar not null,
      familia varchar not null,
      ordem varchar not null,
      constraint pk_especie primary key(id)
    )
  `

  await sql`
      create table if not exists jaula (
        codigo varchar not null,
        area varchar not null,
        constraint pk_jaula primary key(codigo)
      )
  `

  await sql`
      create table if not exists especime (
        id integer not null,
        nro_de_serie integer not null,
        apelido varchar,
        id_especie integer not null,
        id_jaula varchar not null,
        constraint pk_especime primary key(id),
        constraint fk_especime_especie foreign key(id_especie)
          references especie(id),
        constraint fk_especime_jaula foreign key(id_jaula)
          references jaula(codigo)
      )
  `

  await sql`
        create table if not exists zelador (
          matricula varchar not null,
          nome varchar not null,
          data_nascimento date not null,
          constraint pk_zelador primary key(matricula)
        )
  `

  await sql`
          create table if not exists jaula_zelador (
            id_jaula varchar not null,
            id_zelador varchar not null,
            constraint pk_jaula_zelador primary key(id_jaula, id_zelador),
            constraint fk_jaula_zelador_jaula foreign key(id_jaula)
              references jaula(codigo) on delete cascade,
            constraint fk_jaula_zelador_zelador foreign key(id_zelador)
              references zelador(matricula) on delete cascade
          )
  `
}

export const clearData = async () => {
  await sql`
    delete from especime
  `

  await sql`
    delete from especie
  `

  await sql`
    delete from jaula
  `

  await sql`
    delete from zelador
  `
}

export const loadInitialData = async () => {
  for (let especie of especies) {
    await sql`
      insert into especie values (
        ${especie.id}, 
        ${especie.nome_cientifico}, 
        ${especie.nome_popular},
        ${especie.habitat},
        ${especie.familia},
        ${especie.ordem}
      )
    `
  }

  for (let zelador of zeladores) {
    await sql`
      insert into zelador values (
        ${zelador.matricula},
        ${zelador.nome},
        ${zelador.data_nascimento}
      )
    `
  }

  for (let jaula of jaulas) {
    await sql`
      insert into jaula values (
        ${jaula.codigo},
        ${jaula.area}
      )
    `
  }

  for (let especime of especimes) {
    if (especime.apelido) {
      await sql`
        insert into especime values (
          ${especime.id},
          ${especime.nro_de_serie},
          ${especime.apelido ? especime.apelido : ''},
          ${especime.id_especie},
          ${especime.id_jaula}
        )
      `
    } else {
      await sql`
        insert into especime(id, nro_de_serie, id_especie, id_jaula) values (
          ${especime.id},
          ${especime.nro_de_serie},
          ${especime.id_especie},
          ${especime.id_jaula}
        )
      `
    }
  }

  for (let jz of jaula_zelador) {
    await sql`
      insert into jaula_zelador values (
        ${jz.id_jaula},
        ${jz.id_zelador}
      )
    `
  }
}

export default sql
