import jsonData from '../../../public/json/jsonData.json'

const handler = async (req, res) => {
  try {
    const { method } = req

    switch (method) {
      case 'GET':
        console.log('api')
        res.status(200).json(jsonData)
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
