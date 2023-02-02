import styled from 'styled-components'

export const VerticalLayoutWrapper = styled.div`
  height: 100%;
  display: flex;
`

export const MainContentWrapper = styled.div`
  flex-grow: 1;
  min-width: 0;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  -webkit-box-flex: 1;
`

export const ContentWrapper = styled.div`
  flex-grow: 1;
  width: 100%;
  padding: ${props => props.theme.spacing(6)};
  transition: padding 0.25s ease-in-out;
  @media (max-width: ${props => props.theme.breakpoints.values.sm}) {
    padding-left: ${props => props.theme.spacing(4)};
    padding-right: ${props => props.theme.spacing(4)};
  }
  ${props => props.contentWidth === 'boxed'} {
    @media (min-width: 1440px) {
      max-width: 1440px;
    }
    @media (min-width: 1200px) {
      max-width: 100%;
    }
  }
`
