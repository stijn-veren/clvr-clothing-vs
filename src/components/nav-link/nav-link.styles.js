import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const LinkStyled = styled(Link)`
  color: ${({ active }) => (active ? 'tomato' : '#333')};
  text-decoration: none;
  padding: 5px 15px;
  text-transform: uppercase;
  transition: color 0.5s;

  &:hover,
  &:active {
    color: tomato;
  }
`
