type Temperature = {
  date: Date
  celsius: number
}

export const getTemperature = (objJson: any) => {
  const { date, celsius } = objJson

  const splicedDate = date.split('-')
  const year = parseInt(splicedDate[0])
  const month = parseInt(splicedDate[1]) - 1
  const day = parseInt(splicedDate[2])

  const temperature: Temperature = {
    celsius,
    date: new Date(year, month, day),
  }

  return temperature
}

export default Temperature
