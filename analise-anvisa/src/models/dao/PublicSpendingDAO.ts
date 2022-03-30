import { parse } from 'csv-parse/sync'
import { readFileSync } from 'fs'
import { join } from 'path'
import PublicSpending from '../types/PublicSpending'

const parsePublicSpendingCSVFile = () => {
  const filePath = join(__dirname, '..', '..', 'data', 'anvisa.csv')
  const strContent = readFileSync(filePath, 'utf-8')
  let parsedContent: any[] = parse(strContent)
  parsedContent = parsedContent.slice(1)
  return parsedContent
}

const parsedContent = parsePublicSpendingCSVFile()

export const getActivitySpendingsThroughYears = (
  activity: string
): PublicSpending[] => {
  const publicSpendings: PublicSpending[] = []

  const informationSystemsDevelopmentMap = new Map<number, number>()
  parsedContent.forEach((row) => {
    const year = parseInt(row[0])
    const subActionActivity: string = row[1]
    if (
      subActionActivity.trim().toUpperCase() == activity.trim().toUpperCase()
    ) {
      let newValue = parseFloat(row[9])
      const currentValue = informationSystemsDevelopmentMap.get(year)
      if (currentValue) {
        newValue += currentValue
      }
      informationSystemsDevelopmentMap.set(year, newValue)
    }
  })

  const responseMap = new Map(
    [...informationSystemsDevelopmentMap.entries()].sort()
  )

  for (let year of responseMap.keys()) {
    const value = responseMap.get(year)
    if (value != undefined) {
      const spending: PublicSpending = {
        activity,
        organization: 'ANVISA',
        year,
        value,
      }

      publicSpendings.push(spending)
    }
  }

  return publicSpendings
}
