import { MongoClient } from 'mongodb'

const URI = process.env.MONGO_URI

export async function connectToDatabase() {
  try {
    if (!URI) throw new Error('Por favor defina a variável MONGO_URI')

    const client = await new MongoClient.connect(URI, { useNewUrlParser: true })
    const db = await client.db()

    return db
  } catch (error) {
    throw new Error('Erro ao conectar ao banco de dados')
  }
}
