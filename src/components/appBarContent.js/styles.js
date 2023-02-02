import styled from 'styled-components'

export const Box = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const BoxLeft = styled.div`
  margin-right: 0.5rem;
  display: 'flex';
  align-items: 'center';
`

export const BoxRight = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
`

export const IconButton = styled.button`
  display: inline-flex;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
  outline: 0;
  border: 0;
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
  margin-left: -0.6875rem;
  margin-right: 0.875rem;
  &:hover {
    background-color: ${props => props.theme.palette.action.hover};
  }
`

export const TextField = styled.div`
  display: inline-flex;
  flex-direction: column;
  position: relative;
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
  vertical-align: top;
`

export const InputFieldset = styled.fieldset`
  text-align: left;
  position: absolute;
  bottom: 0;
  right: 0;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0 8px;
  pointer-events: none;
  border-radius: inherit;
  border-style: solid;
  border-width: 1px;
  overflow: hidden;
  min-width: 0%;
  border-color: ${props => props.theme.palette.border.input};
`

export const FormControl = styled.div`
  border-radius: 24px;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.4375em;
  color: ${props => props.theme.palette.text.primary};
  box-sizing: border-box;
  cursor: text;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  padding-left: 14px;
  &:hover ${InputFieldset} {
    border-color: ${props => props.theme.palette.text.primary};
  }
  &:focus-within ${InputFieldset} {
    border-width: 2px;
    border-color: ${props => props.theme.palette.primary.main};
  }
`

export const InputLogo = styled.div`
  display: flex;
  height: 0.01em;
  max-height: 2em;
  -webkit-box-align: center;
  align-items: center;
  white-space: nowrap;
  color: ${props => props.theme.palette.action.active};
  margin-right: 8px;
`

export const InputSearch = styled.input`
  font: inherit;
  letter-spacing: inherit;
  color: currentColor;
  border: 0;
  box-sizing: content-box;
  background: none;
  height: 1.5em;
  margin: 0;
  -webkit-tap-highlight-color: transparent;
  display: block;
  min-width: 0;
  width: 100%;
  animation-name: mui-auto-fill-cancel;
  animation-duration: 10ms;
  padding: 8.5px 14px;
  padding-left: 0;
`

export const InputLegend = styled.legend`
  float: unset;
  width: auto;
  overflow: hidden;
  padding: 0;
  line-height: 11px;
  transition: width 150ms cubic-bezier(0, 0, 0.2, 1) 0ms;
`
