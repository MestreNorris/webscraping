import { executeOperation } from '../../components/connection/mongodb'

const handler = async (req, res) => {
  try {
    const { method } = req

    var t0 = performance.now()

    //await executeOperation('animes', 'insertMany', jsonAnimes)

    const data = await executeOperation('series', 'findAll')

    var t1 = performance.now()
    console.log('Operação completada em ' + ((t1 - t0) / 1000).toFixed(2) + ' segundos.')

    switch (method) {
      case 'GET':
        res.status(200).json({ data })
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
