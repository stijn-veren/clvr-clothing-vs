import styled from 'styled-components'

export const Item = styled.a`
  background-image: url('/images/${({ imgUrl }) => imgUrl}');
  grid-area: ${({ name }) => name};
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  height: ${({ name }) => ('womens' || 'mens' ? '380px' : '275px')};
  text-decoration: none;
  position: relative;
`

export const Span = styled.span`
  padding: 22px 30px;
  background-color: rgba(255, 255, 255, 0.75);
  color: #333;
  width: 100%;
  margin: 0 0 30px 0;
  font-size: 40px;
  text-transform: uppercase;
`
export const Letter = styled.span`
  position: absolute;
  top: -73px;
  right: 0px;
  font-size: 190px;
  color: white;
  font-weight: bold;
  text-transform: capitalize;
`
