import Card from '../components/card/index.js'
import { FetchData } from '../components/data/fetchData'
import { useState, useEffect } from 'react'

const Series = () => {
  const [series, setSeries] = useState([])
  const [offset, setOffset] = useState(0)
  const [limit, setLimit] = useState(20)
  const [length, setLength] = useState(0)
  const [status, setStatus] = useState('Carregando registros ...')

  useEffect(() => {
    const fetchData = async () => {
      const response = await FetchData('/api/series')
      response.length === 0 && setStatus('Nenhum registro encontrado')
      setLength(response.length)
      setSeries(response.slice(offset, offset + limit))
    }

    fetchData()
  }, [offset, limit])

  return (
    <Card
      status={status}
      data={series}
      length={length}
      type={'series'}
      limit={limit}
      offset={offset}
      setOffset={setOffset}
    />
  )
}

export default Series
