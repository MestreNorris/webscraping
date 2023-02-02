import { FooterBox, FooterContent, Content, Typography } from './styles'

const Footer = props => {
  const { settings, footerContent: userFooterContent, theme } = props
  const { contentWidth } = settings

  return (
    <FooterBox>
      <FooterContent contentWidth={contentWidth} theme={theme}>
        {userFooterContent ? (
          userFooterContent(props)
        ) : (
          <Content>
            <Typography theme={theme}> &copy; 2022 - Todos os direitos reservados.</Typography>
          </Content>
        )}
      </FooterContent>
    </FooterBox>
  )
}

export default Footer
