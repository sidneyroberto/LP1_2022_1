import { cities } from './data/cities.json'

cities.forEach(city => {
    let sum = 0

    const temperatures = city.temperatures
    temperatures.forEach(t => {
        sum += t.celsius
    })

    const average = sum / temperatures.length
    const aboveAverageTemperatures = temperatures.filter(t => t.celsius > average)

    sum = 0
    temperatures.forEach(t => {
        let difference = t.celsius - average
        sum += Math.pow(difference, 2)
    })
    const standardDeviation = Math.sqrt(sum / temperatures.length)

    console.log('------------------------------------')
    console.log(`City: ${city.name}`)
    console.log(`Average temperature: ${average}`)
    console.log(`Above average temperatures:`)
    console.log(aboveAverageTemperatures)
    console.log(`Standard deviation: ${standardDeviation}`)
})