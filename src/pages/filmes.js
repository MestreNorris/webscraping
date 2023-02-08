import Card from '../components/card/index.js'
import { fetchData } from '../components/data/fetchData'
import { useState, useEffect } from 'react'

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

const Filmes = () => {
  const [offset, setOffset] = useState(0)
  const [filmes, setFilmes] = useState([])
  const limit = 20

  useEffect(() => {
    fetchData('https://webscraping.vercel.app/api/filmes').then(result => {
      console.log(result)
      if (result) {
        const data = result.slice(offset, offset + limit)
        setFilmes(data)
      }
    })
  }, [offset])

  return (
    <Card data={filmes} length={filmes.length} type={'filmes'} limit={limit} offset={offset} setOffset={setOffset} />
  )
}

export default Filmes
