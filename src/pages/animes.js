import Card from '../components/card/index.js'
import { FetchData } from '../components/data/fetchData'
import { useState, useEffect } from 'react'

const Animes = ({ data }) => {
  const [offset, setOffset] = useState(0)
  const [anime, setAnime] = useState('Sem registro')
  const limit = 20
  const animes = data.slice(offset, offset + limit)

  useEffect(() => {
    const url = 'https://webscraping.vercel.app/api/test'

    console.log(url)


    const fetchData1 = async () => {
      try {
        const response = await fetch(url)
        const json = await response.json()
        console.log(json)
        setAnime('Com')
      } catch (_) {
        return [
          {
            id: '105csssssuf09lg50xp2wyh',
            link: 'https://animesfalse.com/animes/wu-dong-qian-kun',
            title: 'Wu Dong Qian Kun S03',
            site: 'Animes False',
            cover: 'https://image.tmdb.org/t/p/w500/6Tad1P4bVstcfZ6RzvojZi0ar0z.jpg',
            status: 'Finalizado',
            episode: 12
          }
        ]
      }
    }

    fetchData1()
  }, [offset])

  return <Card data={animes} length={data.length} type={'animes'} limit={limit} offset={offset} setOffset={setOffset} />
}

export async function getStaticProps() {
  const animesData = await FetchData('https://webscraping.vercel.app/api/animes')

  return { props: { data: animesData }, revalidate: 60 }
}

export default Animes
