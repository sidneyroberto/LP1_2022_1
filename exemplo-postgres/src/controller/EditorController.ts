import sql from '../config/db'
import { Editor, getEditor } from '../models/Editor'

export const saveEditor = async (editor: Editor) => {
    const savedEditor = await sql`
        insert into editor(nome, email) values (
            ${editor.name}, ${editor.email}
        )
    `

    return savedEditor
}

export const findAllEditors = async() => {
    const responseArray = await sql`
        select * from editor
    `

    const editors: Editor[] = responseArray.map(r => getEditor(r))

    return editors
}