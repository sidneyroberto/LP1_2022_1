import { getActivitySpendingsThroughYears } from './parser/PublicSpendingParser'

let publicSpendings = getActivitySpendingsThroughYears('AUDITORIA')

const moneyFormatter = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

publicSpendings.forEach((s) => {
  const moneyValue = moneyFormatter.format(s.value)
  console.log(
    `Gastos em ${s.activity} em ${s.year} do órgao ${s.organization}: ${moneyValue}`
  )
})

publicSpendings = getActivitySpendingsThroughYears('CURSOS')

publicSpendings.forEach((s) => {
  const moneyValue = moneyFormatter.format(s.value)
  console.log(
    `Gastos em ${s.activity} em ${s.year} do órgao ${s.organization}: ${moneyValue}`
  )
})

publicSpendings = getActivitySpendingsThroughYears('REUNI�O')

publicSpendings.forEach((s) => {
  const moneyValue = moneyFormatter.format(s.value)
  console.log(
    `Gastos em ${s.activity} em ${s.year} do órgao ${s.organization}: ${moneyValue}`
  )
})

publicSpendings = getActivitySpendingsThroughYears('ASSESSORIA DE IMPRENSA')

publicSpendings.forEach((s) => {
  const moneyValue = moneyFormatter.format(s.value)
  console.log(
    `Gastos em ${s.activity} em ${s.year} do órgao ${s.organization}: ${moneyValue}`
  )
})
