import { useState } from 'react'
import AppBar from '../appBar'
import Navigation from '../navegation'
import Footer from '../footer'
import ScrollToTop from '../scrollPage'
import { VerticalLayoutWrapper, MainContentWrapper, ContentWrapper } from './styles'
import { ButtonScrollToTop } from '../icons'

const VerticalLayout = props => {
  const { settings, children, scrollToTop, theme, themeConfig } = props
  const { contentWidth } = settings
  const navWidth = themeConfig.navigationSize

  const [navVisible, setNavVisible] = useState(false)
  const toggleNavVisibility = () => setNavVisible(!navVisible)

  return (
    <>
      <VerticalLayoutWrapper>
        <Navigation
          themeConfig={themeConfig}
          theme={theme}
          navWidth={navWidth}
          navVisible={navVisible}
          setNavVisible={setNavVisible}
          toggleNavVisibility={toggleNavVisibility}
          {...props}
        />
        <MainContentWrapper>
          <AppBar theme={theme} toggleNavVisibility={toggleNavVisibility} {...props} />
          <ContentWrapper theme={theme} contentWidth={contentWidth}>
            {children}
          </ContentWrapper>
          <Footer theme={theme} {...props} />
        </MainContentWrapper>
      </VerticalLayoutWrapper>

      {scrollToTop ? (
        scrollToTop(props)
      ) : (
        <ScrollToTop theme={theme}>
          <ButtonScrollToTop theme={theme} themeConfig={themeConfig} aria-label='Voltar ao topo' />
        </ScrollToTop>
      )}
    </>
  )
}

export default VerticalLayout
