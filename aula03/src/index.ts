import { writeFileSync } from 'fs'
import { join } from 'path'

import { clients } from './data/clients.json'
import { Client, getClient } from './models/Client'
import { isClientValid } from './utils/client_utils'

const validClients: Client[] = []

clients.forEach((c) => {
  const client = getClient(c)

  if (isClientValid(client)) {
    validClients.push(client)
  }
})

const clientsJson = JSON.stringify({ clients: validClients })
const path = join(__dirname, 'data', 'valid_clients.json')
writeFileSync(path, clientsJson)
console.log(`${validClients.length} clientes válidos`)
console.log('Mal feito desfeito')
