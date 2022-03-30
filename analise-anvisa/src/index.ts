import { getActivitySpendingsThroughYears } from './models/dao/PublicSpendingDAO'
import { generateChart } from './utils/ChartUtils'

let publicSpendings = getActivitySpendingsThroughYears('AUDITORIA')
generateChart(publicSpendings)
publicSpendings = getActivitySpendingsThroughYears(
  'SUPRIMENTOs ADMINISTRATIVOs'
)
generateChart(publicSpendings)
publicSpendings = getActivitySpendingsThroughYears('PESQUISA')
generateChart(publicSpendings)

console.log('Mal feito desfeito')
