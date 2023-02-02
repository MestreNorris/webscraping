import styled from 'styled-components'

export const ListSubheader = styled.li`
  display: flex;
  position: relative;
  margin-top: ${props => props.theme.spacing(5)};
  margin-bottom: ${props => props.theme.spacing(2)};
  box-sizing: border-box;
  line-height: 48px;
  list-style: none;
  font-family: ${props => props.theme.typography.fontFamily};
  font-weight: 500;
  font-size: 0.875rem;
  top: 0;
  z-index: 1;
  background-color: transparent;
  transition: padding-left 0.25s ease-in-out;
  padding-left: 0rem;
  padding-right: 0rem;
  padding-top: 0.4375rem;
  padding-bottom: 0.4375rem;
  color: ${props => props.theme.palette.text.disabled};
  &:after,
  &:before,
  & hr {
    border-color: rgba(${props => props.theme.palette.customColors.main}, 0.12);
  }
`

export const TypographyHeaderText = styled.p`
  margin: 0;
  font-family: ${props => props.theme.typography.fontFamily};
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.75rem;
  line-height: normal;
  letter-spacing: 0.21px;
  text-transform: uppercase;
  color: ${props => props.theme.palette.text.disabled};
  font-weight: 500;
`

export const Divider = styled.div`
  flex-shrink: 0;
  border-width: 0;
  border-style: solid;
  border-color: ${props => props.theme.palette.divider};
  display: flex;
  white-space: nowrap;
  text-align: center;
  border: 0;
  margin: 0rem;
  width: 100%;
  line-height: normal;
  text-transform: uppercase;
  border-bottom-width: thin;

  &::before,
  &::after {
    position: relative;
    border-top: thin solid ${props => props.theme.palette.divider};
    top: 50%;
    content: '';
  }

  &::before {
    width: 10%;
  }
  &::after {
    width: 90%;
  }
`

export const DividerContent = styled.span`
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  font-size: 0.75rem;
  letter-spacing: 0.21px;
  display: inline-block;
`
