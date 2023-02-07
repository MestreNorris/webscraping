import styled from 'styled-components'

export const ListPagination = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  & li .page_active {
    background-color: gray;
  }
  & li button {
    font-weight: bold;
    width: 40px;
    height: 40px;
    border: 1px solid gray;
    margin: 5px;
    border-radius: 4px;
  }
  & li .first,
  li button.last {
    width: 80px;
  }
`
