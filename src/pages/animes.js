import Card from '../components/card/index.js'

const Animes = ({ data }) => {
  return <Card data={data} />
}

export default Animes

export async function getStaticProps() {
  const res = await fetch('https://webscraping.vercel.app/api/animes')
  const animesData = await res.json()

  if (!res.ok) throw new Error(`Erro ao realizar a requisição, erro status ${res.status}`)

  return {
    props: { data: animesData.data },
    revalidate: 60
  }
}
