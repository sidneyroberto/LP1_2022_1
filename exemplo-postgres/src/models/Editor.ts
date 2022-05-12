export type Editor = {
    id?: number
    name: string
    email: string
}

export const getEditor = (jsonObj: any): Editor => {
    const { id, nome, email } = jsonObj
    const editor: Editor = {
        id,
        name: nome,
        email
    }

    return editor
}