import { Editor } from './Editor'

export type Article = {
    title: string
    content: string
    editors: Editor[]
}

export const getArticle = (jsonObj: any): Article => {
    const { titulo, conteudo } = jsonObj

    const article: Article = {
        title: titulo,
        content: conteudo,
        editors: []
    }

    return article
}