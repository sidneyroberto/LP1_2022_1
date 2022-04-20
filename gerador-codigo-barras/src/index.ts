import { writeFileSync } from 'fs'
import JsBarCode from 'jsbarcode'
import { createCanvas } from 'canvas'

import { calculateCheckDigit } from './utils/EAN13Utils'
import { findCountryByName } from './controllers/CountryController'
import { findCompanyByCode } from './controllers/CompanyController'
import products from './data/products.json'
import { join } from 'path'

products.forEach(async (p) => {
  const company = findCompanyByCode(p.company)
  const country = findCountryByName(company.country)
  let barCode = `${country.code}${company.code}${p.code}`
  const checkDigit = calculateCheckDigit(barCode)
  barCode = `${barCode}${checkDigit}`

  const canvas = createCanvas(200, 200)
  JsBarCode(canvas, barCode, { format: 'EAN13' })
  const buffer = canvas.toBuffer('image/png')
  const barcodesPath = join(__dirname, 'barcodes', `${barCode}.png`)
  writeFileSync(barcodesPath, buffer)
})

console.log('Mal feito desfeito')
