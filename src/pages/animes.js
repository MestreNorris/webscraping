import Card from '../components/card/index.js'
import { FetchData } from '../components/data/fetchData'
import React, { useState, useEffect } from 'react'

const Animes = ({ data }) => {
  const [offset, setOffset] = useState(0)
  const [anime, setAnime] = useState('Sem registro')
  const limit = 20
  const animes = data.slice(offset, offset + limit)

  useEffect(() => {
    fetch('https://webscraping.vercel.app/api/animes')
      .then(response => response.json())
      .then(data => console.log(data))
  }, [])

  return (
    <>
      {anime}
      <Card data={animes} length={data.length} type={'animes'} limit={limit} offset={offset} setOffset={setOffset} />
    </>
  )
}

export async function getStaticProps() {
  const animesData = await FetchData('https://webscraping.vercel.app/api/animes')

  return { props: { data: animesData }, revalidate: 60 }
}

export default Animes
