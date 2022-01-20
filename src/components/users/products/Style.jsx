import styled from 'styled-components'

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
  box-shadow: 2px 2px 3px black;
  &:hover {
    background: grey;
    color: white;
    transition: 1s;
  }
`
export const containerImage = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  .icon {
    position: relative;
    visibility: hidden;
  }
  .icon :hover {
    visibility: visible;
  }
`
