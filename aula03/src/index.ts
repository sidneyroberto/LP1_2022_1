import { clients } from './data/clients.json'

const date = '08521062540'
console.log(date.match(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/))
const phone = '(36) 89065-7211'
console.log(phone.match(/^\(\d{2}\)\s\d{5}-\d{4}$/))
