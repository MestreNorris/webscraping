import Card from '../components/card/index.js'
import { fetchData } from '../components/data/fetchData'
import { useState, useEffect } from 'react'

const Animes = () => {
  const [offset, setOffset] = useState(0)
  const [animes, setAnimes] = useState([])
  const limit = 20

  //data.slice(offset, offset + limit))

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://webscraping.vercel.app/api/animes'
      const response = await fetch(`https://swapi.dev/api/people/1/`)
      const newData = await response.json()
      console.log(newData)
    }

    fetchData()
  }, [])

  return (
    <Card data={animes} length={animes.length} type={'animes'} limit={limit} offset={offset} setOffset={setOffset} />
  )
}

export default Animes
