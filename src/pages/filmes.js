import Card from '../components/card/index.js'
import { FetchData } from '../components/data/fetchData'
import { useState } from 'react'

class TypeFilmes {
  constructor(id, title, link, site, cover, date, status) {
    this.id = id
    this.title = title
    this.link = link
    this.site - site
    this.cover = cover
    this.date = date
    this.status = status
    this.listLink = new Array()
  }
  insertLinks(newLink) {
    this.listLink.push(newLink)
  }
  removeLink(newLink) {
    this.listLink.splice(listLink.indexOf(newLink), 1)
  }
}

const Filmes = ({ data }) => {
  const [offset, setOffset] = useState(0)
  const limit = 20
  const filmes = data.slice(offset, offset + limit)

  return <Card data={filmes} length={data.length} type={'filmes'} limit={limit} offset={offset} setOffset={setOffset} />
}

export async function getStaticProps() {
  const filmesData = await FetchData('https://webscraping.vercel.app/api/filmes')

  return { props: { data: filmesData }, revalidate: 60 }
}

export default Filmes
