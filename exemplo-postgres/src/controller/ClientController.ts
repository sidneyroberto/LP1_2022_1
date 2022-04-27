import sql from '../config/db'
import { Client } from '../models/Client'

export const saveClient = async (client: Client) => {
  const savedClient = await sql`
    insert into clients(name, address, email, cpf, code) values (
      ${client.name}, 
      ${client.address}, 
      ${client.email},
      ${client.cpf},
      ${client.code}
    )
  `

  return savedClient
}

export const findAllClients = async () => {
  const clients = await sql`
    select * from clients
  `

  return clients
}
