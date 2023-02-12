import Card from '../components/card/index.js'
import { FetchData } from '../components/data/fetchData'
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
  const [filmes, setFilmes] = useState([])
  const [offset, setOffset] = useState(0)
  const [limit, setLimit] = useState(20)
  const [length, setLength] = useState(0)
  const [status, setStatus] = useState('Carregando registros ...')

  useEffect(() => {
    const fetchData = async () => {
      const response = await FetchData('/api/filmes')
      response.length === 0 && setStatus('Nenhum registro encontrado')
      setLength(response.length)
      setFilmes(response.slice(offset, offset + limit))
    }

    fetchData()
  }, [offset, limit])

  return (
    <Card
      status={status}
      data={filmes}
      length={length}
      type={'filmes'}
      limit={limit}
      offset={offset}
      setOffset={setOffset}
    />
  )
}

export default Filmes
