import {
  Grid,
  Cardboard,
  Figure,
  Image,
  CardDescription,
  CardName,
  Title,
  CardInfo,
  CardButtom,
  ImageLogo,
  SpanLogo
} from './styles'

const Cover = ({ src }) => {
  return (
    <Figure>
      <Image src={src} alt='Capa' />
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

const Card = ({ data }) => {
  return (
    <Grid>
      {data.map(item => (
        <Cardboard key={item.id}>
          <Cover src={item.cover} alt={'Capa'}></Cover>
          <Description title={item.title} url={item.link} />
        </Cardboard>
      ))}
    </Grid>
  )
}

export default Card
