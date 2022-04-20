import companies from '../data/companies.json'

export const findCompanyByCode = (code: string) => {
  const company = companies.find((c) => c.code == code)
  return company
}
