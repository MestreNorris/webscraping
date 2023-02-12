import {
  Grid,
  NotFound,
  Cardboard,
  Figure,
  CardDescription,
  CardName,
  Title,
  CardInfo,
  CardButtom,
  ImageLogo,
  SpanLogo
} from './styles'
import { useState } from 'react'
import Image from 'next/image'
import imgMangas from '../../../public/images/errorCard/mangas.jpg'
import imgFilmes from '../../../public/images/errorCard/filmes.jpg'
import imgAnimes from '../../../public/images/errorCard/animes.jpg'
import imgSeries from '../../../public/images/errorCard/series.jpg'
import Pagination from '../data/pagination'

const Cover = ({ src, type }) => {
  const [srcImg, setSrcImg] = useState(src)

  const typeCategory = type => {
    switch (type) {
      case 'mangas':
        return imgMangas
      case 'animes':
        return imgAnimes
      case 'filmes':
        return imgFilmes
      case 'series':
        return imgSeries
    }
  }

  const isValidUrl = (urlString, type) => {
    try {
      if (new URL(urlString)) {
        return urlString
      }
    } catch (_) {
      console.log('URL não é válido')

      return typeCategory(type)
    }
  }

  return (
    <Figure>
      <Image
        src={isValidUrl(srcImg, type)}
        fill
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        onError={() => setSrcImg(typeCategory(type))}
        alt='Capa'
        priority
      />
    </Figure>
  )
}

const CardTitle = ({ title }) => {
  return (
    <CardName>
      <Title>{title}</Title>
    </CardName>
  )
}

const CardButtomLeft = () => {
  return (
    <CardButtom>
      <ImageLogo src='/images/cards/info.svg' alt='Informações' />
      <SpanLogo>INFORMAÇÕES</SpanLogo>
    </CardButtom>
  )
}

const CardButtomRight = ({ url }) => {
  return (
    <a href={url} target={'_blank'} rel={'noreferrer'}>
      <CardButtom>
        <ImageLogo src='/images/cards/link.svg' alt='Acessar página' />
        <SpanLogo>ACESSAR</SpanLogo>
      </CardButtom>
    </a>
  )
}

const Description = ({ title, url }) => {
  return (
    <CardDescription>
      <CardTitle title={title} />
      <CardInfo>
        <CardButtomLeft />
        <CardButtomRight url={url} />
      </CardInfo>
    </CardDescription>
  )
}

const Card = ({ data, length, type, limit, offset, setOffset, status }) => {
  return length !== 0 ? (
    <>
      <Grid>
        {data.map(item => (
          <Cardboard key={item.id}>
            <Cover src={item.cover} type={type} alt={'Capa'}></Cover>
            <Description title={item.title} url={item.link} />
          </Cardboard>
        ))}
      </Grid>
      <Pagination limit={limit} totalItens={length} offset={offset} setOffset={setOffset} />
    </>
  ) : (
    <NotFound>{status}</NotFound>
  )
}

export default Card
