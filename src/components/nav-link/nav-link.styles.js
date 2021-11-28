import styled from 'styled-components'

export const Link = styled.a`
  color: ${({ active }) => (active ? 'tomato' : '#333')};
  text-decoration: none;
  padding: 5px 15px;
  text-transform: uppercase;
  transition: color 0.5s;

  &:hover, &:active {
    color: tomato;
  }
`
