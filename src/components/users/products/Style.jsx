import styled from "styled-components"



export const Category = styled.div`
  display: inline-block;
  align-contents: center;
  text-align: center;
`

export const Select = styled.select`
  border-radius: 5px;
  font-weight: 600;
  margin-left: 5rem;
`
export const Selected = styled.button`
  margin: 1rem;
  height: 2rem;
  border-radius: 5px;
  text-align: center;
  padding-bottom: 2rem;
  &:hover {
    background: grey;
    color:white;
  }
`
