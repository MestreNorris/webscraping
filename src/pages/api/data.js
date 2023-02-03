import { executeOperation } from '../../components/connection/mongodb'

const handler = async (req, res) => {
  try {
    const { method } = req

    const data = await executeOperation('animes', 'findAll')

    switch (method) {
      case 'GET':
        res.status(200).json({ data })
        break
      default:
        res.setHeader('Allow', ['GET', 'POST'])
        res.status(405).end(`Método ${method} não suportado`)
    }
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
