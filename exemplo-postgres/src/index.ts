import sql, { createTables } from './config/db'
import { findAllArticles, saveArticle } from './controller/ArticleController'
import { findAllEditors, saveEditor } from './controller/EditorController'
import { Article } from './models/Article'
import { Editor } from './models/Editor'

const run = async () => {
  await createTables()

  let editor: Editor = {
    name: 'Sidney Sousa',
    email: 'sidney@email.com',
  }

  await saveEditor(editor)

  editor = {
    name: 'Leandro Magalhães',
    email: 'leandro@email.com',
  }

  await saveEditor(editor)

  const editors = await findAllEditors()
  console.log(editors.length)
  //editors.forEach(e => console.log(e))

  const article: Article = {
    title: 'Como pesquisar bugs no StackOverlow',
    content: 'É muito simples! Basta você...',
    editors,
  }

  await saveArticle(article)

  const articles = await findAllArticles()
  articles.forEach((a) => console.log(a))
}

run()
