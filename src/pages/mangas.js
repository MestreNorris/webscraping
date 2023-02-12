import Card from '../components/card/index.js'
import { FetchData } from '../components/data/fetchData'
import { useState, useEffect } from 'react'

const Mangas = () => {
  const [mangas, setMangas] = useState([])
  const [offset, setOffset] = useState(0)
  const [limit, setLimit] = useState(20)
  const [length, setLength] = useState(0)
  const [status, setStatus] = useState('Carregando registros ...')

  useEffect(() => {
    const fetchData = async () => {
      const response = await FetchData('/api/mangas')
      response.length === 0 && setStatus('Nenhum registro encontrado')
      setLength(response.length)
      setMangas(response.slice(offset, offset + limit))
    }

    fetchData()
  }, [offset, limit])

  return (
    <Card
      status={status}
      data={mangas}
      length={length}
      type={'mangas'}
      limit={limit}
      offset={offset}
      setOffset={setOffset}
    />
  )
}

export default Mangas
