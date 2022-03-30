import { ChartConfiguration } from 'chart.js'
import { ChartJSNodeCanvas } from 'chartjs-node-canvas'
import { writeFileSync } from 'fs'
import { join } from 'path'

import PublicSpending from '../models/types/PublicSpending'

const getChartData = (publicSpendings: PublicSpending[]) => {
  const labels: string[] = []
  const data: number[] = []

  publicSpendings.forEach((s) => {
    labels.push(`${s.year}`)
    data.push(s.value)
  })

  const { activity, organization } = publicSpendings[0]
  const chartLabel = `Gastos em ${activity} do órgao ${organization} por ano`

  const chartData = {
    labels,
    datasets: [
      {
        label: chartLabel,
        borderColor: 'rgb(0,0,+255)',
        backgroundColor: 'rgba(0,0,+255,+.5)',
        data,
      },
    ],
  }

  return chartData
}

export const generateChart = (publicSpendings: PublicSpending[]) => {
  if (publicSpendings?.length > 0) {
    const data = getChartData(publicSpendings)
    const { activity, organization } = publicSpendings[0]

    const chart = new ChartJSNodeCanvas({
      height: 400,
      width: 800,
      backgroundColour: 'white',
    })

    const configuration: ChartConfiguration = {
      data,
      type: 'line',
    }
    const image = chart.renderToBufferSync(configuration)

    const fileName = `${organization}_${activity.replace(' ', '_')}.png`
    const path = join(__dirname, '..', 'charts', fileName)
    writeFileSync(path, image)
  }
}
