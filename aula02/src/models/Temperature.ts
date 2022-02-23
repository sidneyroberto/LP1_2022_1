type Temperature = {
    date: Date
    celsius: number
}

export const getTemperature = (objJson: any) => {
    const { date, celsius } = objJson

    const slicedData = date.split('-')
    const year = parseInt(slicedData[0])
    const month = parseInt(slicedData[1]) - 1
    const day = parseInt(slicedData[2])

    const temperature: Temperature = {
        date: new Date(year, month, day),
        celsius
    }

    return temperature
}

export default Temperature