import { RiverReading } from './models/RiverReading'
import { fetchRiverReadingData } from './services/river_reading_service'
import { saveToCsvFile } from './utils/file_utils'

const generateRiverDataFiles = async (
  stationCode: string,
  initialDate: Date,
  finalDate: Date
) => {
  const readings: RiverReading[] = await fetchRiverReadingData(
    stationCode,
    initialDate,
    finalDate
  )

  saveToCsvFile(readings, 'leituras.csv')
  console.log('Mal feito desfeito')
}

generateRiverDataFiles('66945000', new Date(2022, 2, 16), new Date(2022, 2, 16))
