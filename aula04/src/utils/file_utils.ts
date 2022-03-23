import { writeFileSync } from 'fs'
import { RiverReading } from '../models/RiverReading'

export const saveToCsvFile = (readings: RiverReading[], fileName: string) => {
  let csvContent = 'COD. ESTACAO,NIVEL,VAZAO,CHUVA,DATA/HORA\n'
  readings.forEach((r) => {
    const line = `${r.stationCode},${r.level},${r.flow},${r.rain},${r.dateTime}\n`
    //csvContent = csvContent + line
    //csvContent += line
    csvContent = `${csvContent}${line}`
  })

  writeFileSync(fileName, csvContent)
}
