import { MongoClient } from 'mongodb'

export async function connectToDatabase() {
  const URI = process.env.MONGODB_URI

  if (!process.env.MONGODB_URI) {
    throw new Error('Por favor adicione a variável Mongo URI')
  }

  const client = new MongoClient(URI, {})

  try {
    await client.connect().then(console.log('\nConectado ao servidor com sucesso'))
    const db = client.db()

    return { db, client }
  } catch (error) {
    console.log('Erro ao conectar ao servidor \n')
  }
}

export async function executeOperation(collectionName, operation, data) {
  try {
    const namesSuported = ['animes', 'series, filmes', 'mangas']
    const operationSuported = ['insertMany', 'deleteMany', 'deleteOne', 'findAll', 'updateOne']

    !namesSuported.includes(collectionName) && (console.log('\nNome da coleção não encontrada'), client.close())
    !operationSuported.includes(operation) && (console.log('\nOperação não suportada'), client.close())

    const { db, client } = await connectToDatabase()
    const collection = db.collection(collectionName)
    let result = null

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
