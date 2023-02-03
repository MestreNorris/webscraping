import Card from '../components/card/index.js'

const Filmes = ({ data }) => {
  return <Card data={data} />
}

export default Filmes

export async function getStaticProps() {
  const res = await fetch('https://webscraping.vercel.app/api/filmes')
  const filmesData = await res.json()

  if (!res.ok) throw new Error(`Erro ao realizar a requisição, erro status ${res.status}`)

  return {
    props: { data: filmesData.data },
    revalidate: 60
  }
}
