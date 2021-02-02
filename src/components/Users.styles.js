import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const User = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  width: 200px;
  text-overflow: ellipsis;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;

  &:hover {
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.15);
    color: red;
  }
`

export const Pagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Page = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid blue;

  &:hover {
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.15);
    color: red;
  }
`