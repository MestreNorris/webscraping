import Card from '../components/card/index.js'
import { FetchData } from '../components/data/fetchData'
import { useState } from 'react'

const Series = ({ data }) => {
  const [offset, setOffset] = useState(0)
  const limit = 20
  const series = data.slice(offset, offset + limit)

  return <Card data={series} length={data.length} type={'series'} limit={limit} offset={offset} setOffset={setOffset} />
}

export async function getStaticProps() {
  const seriesData = await FetchData('https://webscraping.vercel.app/api/series')

  return { props: { data: seriesData }, revalidate: 10 }
}

export default Series
