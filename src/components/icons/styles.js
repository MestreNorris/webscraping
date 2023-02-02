import styled from 'styled-components'

export const SVGToggleTheme = styled.svg`
  user-select: none;
  width: 1em;
  height: 1em;
  display: inline-block;
  fill: currentColor;
  flex-shrink: 0;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-size: 1.5rem;
`

export const ButtomToggleTheme = styled.button`
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
  outline: 0;
  border: 0;
  margin: 0;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  -webkit-appearance: none;
  text-decoration: none;
  text-align: center;
  flex: 0 0 auto;
  font-size: 1.5rem;
  padding: 8px;
  border-radius: 50%;
  overflow: visible;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  color: inherit;
  &:hover {
    background-color: ${props => props.theme.palette.action.hover};
  }
  &:active {
    background-color: ${props => props.theme.palette.action.focus};
    border-radius: 50%;
  }
`

export const SVGSidebar = styled.svg`
  width: 25px;
  height: 25px;
  fill: currentColor;
`

export const SVGLogoApp = styled(SVGSidebar)`
  width: 30px;
  rotate: 180deg;
`

export const ButtonScroll = styled.button`
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
  border: 0;
  margin: 0;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  -webkit-appearance: none;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  text-transform: uppercase;
  min-height: 36px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 50%;
  padding: 0;
  min-width: 0;
  width: 40px;
  height: 40px;
  z-index: 1050;
  box-shadow: 0px 2px 10px 0px rgb(58 53 65 / 10%);
  color: #fff;
  background-color: ${props => props.theme.palette[props.themeConfig.themeColor].main};
  &:hover {
    background-color: ${props => props.theme.palette[props.themeConfig.themeColor].dark};
    text-decoration: none;
  }
`

export const SVGScroll = styled.svg`
  user-select: none;
  width: 1em;
  height: 1em;
  display: inline-block;
  fill: currentColor;
  flex-shrink: 0;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-size: 1.5rem;
`

export const SVGDropdown = styled.svg`
  user-select: none;
  width: 1em;
  height: 1em;
  display: inline-block;
  fill: currentColor;
  flex-shrink: 0;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  margin-right: 0.5rem;
  font-size: 1.375rem;
  color: ${props => props.theme.palette.text.secondary};
`

export const SVGDropdownNavbar = styled(SVGDropdown)`
  margin: 0;
  color: inherit;
`

export const ButtonDropdown = styled.button`
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
  outline: 0;
  border: 0;
  margin: 0;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  -webkit-appearance: none;
  text-decoration: none;
  text-align: center;
  flex: 0 0 auto;
  font-size: 1.5rem;
  padding: 8px;
  border-radius: 50%;
  overflow: visible;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  color: inherit;
  &:hover {
    background-color: ${props => props.theme.palette.action.hover};
  }
`
