import styled from 'styled-components'

export const ScrollToTopStyled = styled.div`
  z-index: 11;
  position: fixed;
  right: ${props => props.theme.spacing(6)};
  bottom: ${props => props.theme.spacing(10)};
`

export const Scroll = styled.div`
  display: ${props => (props.visibleScroll ? 'none' : 'block')};
`
