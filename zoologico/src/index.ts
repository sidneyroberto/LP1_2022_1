import sql, { clearData, createTables, loadInitialData } from './config/db'

const run = async () => {
  await createTables()
  await clearData()
  await loadInitialData()

  /**
   * Execute as funções responsáveis pelas consultas aqui!
   */

  /**
   * Fim das consultas
   */

  await sql.end()
  console.log('Mal feito desfeito')
}

run()
