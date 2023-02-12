import Card from '../components/card/index.js'
import { FetchData } from '../components/data/fetchData'
import React, { useState, useEffect } from 'react'

const Animes = () => {
  const [animes, setAnimes] = useState([])
  const [offset, setOffset] = useState(0)
  const [limit, setLimit] = useState(20)
  const [length, setLength] = useState(0)
  const [status, setStatus] = useState('Carregando registros ...')

  useEffect(() => {
    const fetchData = async () => {
      const response = await FetchData('/api/animes')
      response.length === 0 && setStatus('Nenhum registro encontrado')
      setLength(response.length)
      setAnimes(response.slice(offset, offset + limit))
    }

    fetchData()
  }, [offset, limit])

  return (
    <Card
      status={status}
      data={animes}
      length={length}
      type={'animes'}
      limit={limit}
      offset={offset}
      setOffset={setOffset}
    />
  )
}

export default Animes
