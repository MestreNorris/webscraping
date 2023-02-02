import styled from 'styled-components'

export const MenuNavLink = styled.a`
  color: ${props => props.theme.palette.text.primary};
  &.active,
  &.active:hover {
    box-shadow: ${props => props.theme.shadows[3]};
    background-image: linear-gradient(
      98deg,
      ${props => props.theme.palette.customColors.primaryGradient},
      ${props => props.theme.palette.primary.main} 94%
    );
  }
  &.active p,
  &.active svg {
    color: ${props => props.theme.palette.common.white} !important;
  }
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
  outline: 0;
  border: 0;
  margin: 0;
  border-radius: 0;
  user-select: none;
  vertical-align: middle;
  -webkit-appearance: none;
  display: flex;
  -webkit-box-flex: 1;
  flex-grow: 1;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  text-decoration: none;
  min-width: 0;
  box-sizing: border-box;
  text-align: left;
  width: 100%;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  padding: 0.5625rem;
  transition: opacity 0.25s ease-in-out;
  padding-left: 1.375rem;
  cursor: pointer;
`

export const MenuItemTextMetaWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: opacity 0.25s ease-in-out;
  ${props => props.themeConfig.menuTextTruncate && { overflow: 'hidden' }}
`

export const ListItem = styled.li`
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  text-decoration: none;
  width: 100%;
  box-sizing: border-box;
  text-align: left;
  margin-top: 0.375rem;
  padding-left: 0 !important;
  padding-right: 0 !important;
`

export const ListItemIcon = styled.div`
  min-width: 56px;
  flex-shrink: 0;
  display: inline-flex;
  margin-right: 0.625rem;
  color: ${props => props.theme.palette.text.primary};
  transition: margin 0.25s ease-in-out;
`

export const Typography = styled.p`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${props => props.themeConfig.menuTextTruncate && { noWrap: true }}
`
