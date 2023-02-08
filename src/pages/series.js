import Card from '../components/card/index.js'
import { fetchData } from '../components/data/fetchData'
import { useState } from 'react'

const Series = ({ data }) => {
  const [offset, setOffset] = useState(0)
  const limit = 20
  const series = data.slice(offset, offset + limit)

  return <Card data={series} length={data.length} type={'series'} limit={limit} offset={offset} setOffset={setOffset} />
}

export async function getStaticProps() {
  const seriesData = await fetchData('https://webscraping.vercel.app/api/series')

  return { props: { data: seriesData }, revalidate: 60 }
}

export default Series
