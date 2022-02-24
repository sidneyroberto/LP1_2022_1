export const findAverageTemperature = (temperatures) => {
  let sum = 0
  temperatures.forEach((t) => {
    sum += t.celsius
  })
  const average = sum / temperatures.length
  return average
}

export const findStandardDeviation = (temperatures) => {
  let sum = 0
  const average = findAverageTemperature(temperatures)
  temperatures.forEach((t) => {
    const difference = t.celsius - average
    const power = Math.pow(difference, 2)
    sum += power
  })
  const semiResult = sum / temperatures.length
  const standardDeviation = Math.sqrt(semiResult)
  return standardDeviation
}

export const findAboveAverageTemperatures = (temperatures) => {
  const average = findAverageTemperature(temperatures)
  const filteredTemperatures = temperatures.filter((t) => t.celsius > average)
  const aboveAverageTemperatures = filteredTemperatures.map((t) => t.celsius)
  return aboveAverageTemperatures
}
