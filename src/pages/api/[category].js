import { executeOperation } from '../../components/connection/mongodb'

const handler = async (req, res) => {
  try {
    const { method, query } = req
    const suportedAPIs = ['animes', 'series', 'filmes', 'mangas']
    let data = null

    if (suportedAPIs.includes(query.category)) {
      data = await executeOperation(query.category, 'findAll')
    }

    switch (method) {
      case 'GET':
        data ? res.status(200).json(data) : res.redirect(301, '/404')
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
