import sql from '../config/db'
import { Article } from '../models/Article'

export const saveArticle = async (article: Article) => {
  const response = await sql`
        insert into artigo(titulo, conteudo) values (
            ${article.title}, ${article.content}
        ) returning id
    `

  const { id } = response[0]

  const { editors } = article
  for (let e of editors) {
    await sql`
            insert into editor_artigo values (
                ${e.id}, ${id}
            )
        `
  }
}

export const findAllArticles = async () => {
  const response = await sql`
        select a.id, a.titulo, a.conteudo, e.nome
        from artigo a
        inner join editor_artigo ea
            on a.id = ea.id_artigo
        inner join editor e
            on ea.id_editor = e.id
    `

  return response
}
