export type Client = {
  name: string
  address: string
  phone: string
  email: string
  cpf: string
}

export const getClient = (objJson: any) => {
  const { name, address, phone, email, cpf } = objJson
  const client: Client = { name, address, phone, email, cpf }
  return client
}
