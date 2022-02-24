import { cities } from './data/cities.json'
import City from './models/City'
import { getTemperature } from './models/Temperature'
import {
  findAboveAverageTemperatures,
  findAverageTemperature,
  findStandardDeviation,
} from './utils/temperatureUtils'

cities.forEach((c) => {
  const city: City = {
    name: c.name,
    state: c.state,
    country: c.country,
    temperatures: c.temperatures.map((t) => getTemperature(t)),
  }
  const temperatures = city.temperatures

  /**
   * Calcula a temperatura média do período
   */
  const average = findAverageTemperature(temperatures)

  /**
   * Calcula o desvio padrão do período
   */
  const standardDeviation = findStandardDeviation(temperatures)

  /**
   * Encontra as temperaturas acima da média do período
   */
  const aboveAverageTemperatures = findAboveAverageTemperatures(temperatures)

  console.log('-----------------------------------------------')
  console.log(`City: ${city.name}`)
  console.log(`Average temperature: ${average}`)
  console.log(`Standard deviation: ${standardDeviation}`)
  console.log('Above average temperatures:')
  console.log(aboveAverageTemperatures)
})
