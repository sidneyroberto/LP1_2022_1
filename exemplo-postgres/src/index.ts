import { createTables } from './config/db'
import { saveClient, findAllClients } from './controller/ClientController'
import { clients } from './data/clients.json'
import { Client, getClient } from './models/Client'

const run = async () => {
  await createTables()
  clients.forEach(async (c) => {
    const client: Client = getClient(c)
    await saveClient(client)
  })

  const savedClients = await findAllClients()
  savedClients.forEach((c) => console.log(c))
}

run()
