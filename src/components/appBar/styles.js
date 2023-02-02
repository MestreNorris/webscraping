import styled from 'styled-components'

export const AppBar = styled.header`
  transition: none;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  padding: ${props => props.theme.spacing(4)};
  color: ${props => props.theme.palette.text.primary};
  min-height: ${props => props.theme.mixins.toolbar.minHeight}px;
  @media (max-width: ${props => props.theme.breakpoints.values.sm}) {
    padding-left: ${props => props.theme.spacing(4)};
    padding-right: ${props => props.theme.spacing(4)};
  }
  position: static;
`

export const Toolbar = styled.div`
  width: 100%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: ${props => props.theme.spacing(0)} !important;
  min-height: ${props => props.theme.mixins.toolbar.minHeight}px !important;
  transition: padding 0.25s ease-in-out, box-shadow 0.25s ease-in-out, backdrop-filter 0.25s ease-in-out,
    background-color 0.25s ease-in-out;

  ${props => props.contentWidth === 'boxed'} {
    @media (min-width: 1440px) {
      max-width: calc(1440px - ${props => props.theme.spacing(6) * 2});
    }
  }
`
