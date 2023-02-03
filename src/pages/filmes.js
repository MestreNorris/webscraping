import Card from '../components/card/index.js'
import data from '../pages/api/jsonAnimes.json'

const Filmes = ({ data }) => {
  return <Card data={data} />
}

export async function getStaticProps() {
  const res = await fetch('https://webscraping.vercel.app/api/filmes')
  const filmesData = await res.json()

  if (!res.ok) throw new Error('Erro ao realizar a requisição')

  return {
    props: { data: filmesData.data },
    revalidate: 60
  }
}

export default Filmes
