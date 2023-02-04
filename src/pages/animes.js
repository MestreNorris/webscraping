import Card from '../components/card/index.js'

const Animes = ({ data }) => {
  return <Card data={data} />
}

export default Animes

export async function getStaticProps() {
  const res = await fetch('https://webscraping.vercel.app/api/animes')
  const animesData = await res.json()

  if (!res.ok) throw new Error('Erro ao realizar a requisição')

  return {
    props: { data: animesData },
    revalidate: 60
  }
}
