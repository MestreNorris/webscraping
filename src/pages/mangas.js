import Card from '../components/card/index.js'

const Mangas = ({ data }) => {
  return <Card data={data} />
}

export async function getStaticProps() {
  const res = await fetch('https://webscraping.vercel.app/api/mangas')
  const mangasData = await res.json()

  if (!res.ok) throw new Error('Erro ao realizar a requisição')

  return {
    props: { data: mangasData.data },
    revalidate: 60
  }
}

export default Mangas
