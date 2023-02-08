import Card from '../components/card/index.js'
import { FetchData } from '../components/data/fetchData'
import { useState } from 'react'

const Mangas = ({ data }) => {
  const [offset, setOffset] = useState(0)
  const limit = 20
  const manga = data.slice(offset, offset + limit)

  return <Card data={manga} length={data.length} type={'mangas'} limit={limit} offset={offset} setOffset={setOffset} />
}

export async function getStaticProps() {
  const mangasData = await FetchData('https://webscraping.vercel.app/api/mangas')
  console.log('mangasData', mangasData)

  return { props: { data: mangasData }, revalidate: 60 }
}

export default Mangas
