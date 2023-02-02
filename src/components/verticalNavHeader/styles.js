import styled from 'styled-components'

export const MenuHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: ${props => props.theme.spacing(4.5)};
  min-height: ${props => props.theme.mixins.toolbar.minHeight}px;
  padding-left: ${props => props.theme.spacing(6)};
`

export const LinkLogo = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
`

export const LogoTitle = styled.h1`
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  color: ${props => props.theme.palette.text.primary};
  transition: opacity 0.25s ease-in-out, margin 0.25s ease-in-out;
  font-size: 1.25rem;
  margin-left: 0.75rem;
`
