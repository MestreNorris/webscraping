import styled from 'styled-components'

export const Box = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
`

export const BoxContainer = styled.div`
  height: 100%;
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
`

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
  padding-top: 8px;
  padding-bottom: 8px;
  transition: padding 0.25s ease;
  padding-right: 1.125rem;
`
