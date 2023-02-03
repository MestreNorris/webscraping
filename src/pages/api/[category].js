import { executeOperation } from '../../components/connection/mongodb'
import { Error404 } from '../404'

const handler = async (req, res) => {
  try {
    var t0 = performance.now()
    const { method, query } = req
    const suportedAPIs = ['animes', 'series', 'filmes', 'mangas']

    switch (method) {
      case 'GET':
        suportedAPIs.includes(query.category)
          ? res.status(200).json(await executeOperation(query.category, 'findAll'))
          : res.render(Error404)

        var t1 = performance.now()
        console.log('Operação completada em ' + ((t1 - t0) / 1000).toFixed(2) + ' segundos.')
        break
      default:
        res.setHeader('Allow', ['GET', 'POST'])
        res.status(405).end(`Método ${method} não suportado`)
    }
  } catch (_) {
    res.status(500).json({ statusCode: 500, message: 'Erro ao executar a operação no servidor' })
  }
}

export default handler
