import styled from 'styled-components'

export const FooterBox = styled.footer`
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FooterContent = styled.div`
  width: 100%;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  padding: ${props => props.theme.spacing(4)};

  ${props => props.contentWidth === 'boxed'} {
    @media (min-width: 1440px) {
      max-width: 1440px;
    }
  }
`

export const Content = styled.div`
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Typography = styled.p`
  margin: 0;
  font-family: ${props => props.theme.typography.fontFamily};
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;
`
