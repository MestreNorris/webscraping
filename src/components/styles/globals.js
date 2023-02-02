import { createGlobalStyle, css } from 'styled-components'

const Body = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
    box-shadow: none;
    letter-spacing: 0;
    line-height: 0;
  }
  html,
  body {
    min-height: 100%;
  }
`

const RoutingLoader = css`
  .ps__rail-y {
    z-index: 1;
    right: 0 !important;
    left: auto !important;
    &:hover,
    &:focus,
    &.ps--clicking {
      background-color: ${props =>
        props.theme.palette.mode === 'light' ? '#E4E5EB !important' : '#423D5D !important'};
    }
    & .ps__thumb-y {
      right: 3px !important;
      left: auto !important;
      background-color: ${props =>
        props.theme.palette.mode === 'light' ? '#C2C4D1 !important' : '#504B6D !important'};
    }
    .layout-vertical-nav & {
      & .ps__thumb-y {
        width: 4px;
        background-color: ${props =>
          props.theme.palette.mode === 'light' ? '#C2C4D1 !important' : '#504B6D !important'};
      }
      &:hover,
      &:focus,
      &.ps--clicking {
        background-color: transparent !important;
        & .ps__thumb-y {
          width: 6px;
        }
      }
    }
  }

  #nprogress {
    pointer-events: none;
    & .bar {
      left: 0;
      top: 0;
      height: 3px;
      width: 100%;
      z-index: 2000;
      position: fixed;
      background-color: ${props => props.theme.palette.primary.main};
    }
  }
`

const Scroll = css`
  ::-webkit-scrollbar {
    width: 20px;
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: currentColor;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
    min-height: 40px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
`

const GlobalStyle = createGlobalStyle`
  ${RoutingLoader};
  ${Scroll};
  ${Body};
`

export default GlobalStyle
