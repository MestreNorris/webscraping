import { connectToDatabase } from '../../components/connection/mongodb'

const handler = async (req, res) => {
  try {
    const { method } = req

    const db = await connectToDatabase()
    const data = db.collection('animes')

    switch (method) {
      case 'GET':
        res.status(200).json(data)
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
