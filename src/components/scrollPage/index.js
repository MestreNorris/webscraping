import { useState } from 'react'
import { ScrollToTopStyled, Scroll } from './styles'

const ScrollToTop = props => {
  const { children, theme } = props
  const [visible, setVisible] = useState(true)

  const handleClick = () => {
    const anchor = document.querySelector('body')
    anchor && anchor.scrollIntoView({ behavior: 'smooth' })
  }

  typeof window !== 'undefined' &&
    window.addEventListener('scroll', () => {
      const scrolled = document.documentElement.scrollTop
      scrolled > 600 ? setVisible(false) : setVisible(true)
    })

  return (
    <Scroll visibleScroll={visible}>
      <ScrollToTopStyled theme={theme} onClick={handleClick} role='presentation'>
        {children}
      </ScrollToTopStyled>
    </Scroll>
  )
}

export default ScrollToTop
