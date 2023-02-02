import { Fragment } from 'react'
import BlankLayout, { Box, Title, SubTitle, Description, Image } from './styles'

const Error404 = () => {
  return (
    <Fragment>
      <Box>
        <Box>
          <Title>404</Title>
          <SubTitle>Página não encontrada ⚠️</SubTitle>
          <Description>Não foi possível encontrar a página que você está procurando.</Description>
        </Box>
        <Image alt='Error 404' src='/images/pages/404.png' />
      </Box>
    </Fragment>
  )
}

Error404.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default Error404
