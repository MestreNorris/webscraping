import { MongoClient } from 'mongodb'

const URI = process.env.MONGO_URI

const client = new MongoClient(URI, { useNewUrlParser: true, useUnifiedTopology: true })

export async function connectToDatabase() {
  try {
    await client.connect().then(console.log('Conectado ao servidor com sucesso'))
    const db = client.db()

    return { db, client }
  } catch (error) {
    console.log('Erro ao conectar ao servidor')
  }
}

export async function executeOperation(collectionName, operation, data) {
  try {
    const { db, client } = await connectToDatabase()
    const collection = db.collection(collectionName)
    let result = null

    const namesSuported = ['animes', 'series, filmes', 'mangas']
    const operationSuported = ['insertMany', 'deleteMany', 'deleteOne', 'findAll', 'updateOne']

    if (!namesSuported.includes(collectionName)) {
      client.close()

      return { collection: 'Nome da coleção não encontrada' }
    } else if (!operationSuported.includes(operation)) {
      client.close()

      return { operation: 'Método do banco de dados não suportado' }
    }

    const execute = {
      async insertMany() {
        await collection.insertMany(data)
      },
      async deleteMany() {
        await collection.deleteMany({})
      },
      async deleteOne() {
        await collection.deleteOne(data)
      },
      async findAll() {
        return await collection.find({}).toArray()
      },
      async updateOne() {
        await collection.updateOne(data)
      }
    }

    result = await execute[operation]()
    client.close()

    return result
  } catch (_) {
    console.log('Erro ao executar a operação')
  }
}
