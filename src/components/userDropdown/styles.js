import styled from 'styled-components'

export const Box = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  color: ${props => props.theme.palette.text.primary};
  text-decoration: none;
  & svg {
    font-size: 1.375rem;
    color: ${props => props.theme.palette.text.secondary};
  }
`

export const MenuDropdown = styled.div`
  transform: none;
  transition: opacity 254ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 169ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  top: 56px;
  right: 25px;
  transform-origin: 230px 0px;
  width: 230px;
  margin-top: 1rem;
  background-color: ${props => props.theme.palette.background.paper};
  color: ${props => props.theme.palette.text.primary};
  border-radius: 6px;
  box-shadow: 0px 5px 5px -3px rgb(58 53 65 / 20%), 0px 8px 10px 1px rgb(58 53 65 / 14%),
    0px 3px 14px 2px rgb(58 53 65 / 12%);
  position: absolute;
  overflow-y: auto;
  overflow-x: hidden;
  min-width: 16px;
  min-height: 16px;
  outline: 0;
  z-index: 150;
  display: ${props => (props.isOpen ? 'block' : 'none')};
  opacity: ${props => (props.isOpen ? 1 : 0)};
`

export const MenuDropdownList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
  padding-top: 8px;
  padding-bottom: 8px;
  outline: 0;
`

export const MenuDropdownItem = styled.li`
  -webkit-tap-highlight-color: transparent;
  outline: 0;
  border: 0;
  margin: 0;
  border-radius: 0;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  -webkit-appearance: none;
  color: inherit;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  white-space: nowrap;
  padding: 0rem;
  @media (min-width: 600px) {
    min-height: auto;
  }
  &:hover {
    text-decoration: none;
    background-color: ${props => props.theme.palette.action.hover};
  }
`
