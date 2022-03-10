export type Client = {
  name: string
  address: string
  phone: string
  email: string
  cpf: string
  code: string
}

export const getClient = (objJson: any) => {
  const { name, address, phone, email, cpf, code } = objJson
  const client: Client = { name, address, phone, email, cpf, code }
  return client
}
