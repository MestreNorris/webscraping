import Card from '../components/card/index.js'

const Series = ({ data }) => {
  return <Card data={data} />
}

export async function getStaticProps() {
  const res = await fetch('https://webscraping.vercel.app/api/series')
  const seriesData = await res.json()

  if (!res.ok) throw new Error('Erro ao realizar a requisição')

  return {
    props: { data: seriesData.data },
    revalidate: 60
  }
}

export default Series
