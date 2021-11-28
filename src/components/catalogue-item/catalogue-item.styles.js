import styled from 'styled-components'

export const Item = styled.a`
  background-image: url('/images/${({ imgUrl }) => imgUrl}');
  grid-area: ${({ name }) => name};
  height: ${({ name }) => ('womens' || 'mens' ? '380px' : '275px')};
  text-decoration: none;
  position: relative;
`

export const Span = styled.span`
  background-color: rgba(255, 255, 255, 0.25);
  width: 100%;
  display: block;
  position: absolute;
  bottom: 40px;
  left: 0;
  height: 50px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.5s;

  a:hover & {
    width: 100%;
    height: 100%;
    bottom: 0;
    background-color: rgba(255, 255, 255, 1);
  }
`

export const Text = styled.span`
  font-size: 40px;
  text-transform: uppercase;
  color: #444;
  position: absolute;
  bottom: 25px;
  font-weight: bold;
  left: 0;
  text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.9);
`

export const Letter = styled.span`
  font-size: 190px;
  color: pink;
  font-weight: bold;
  text-transform: capitalize;
  position: relative;
  top: 32px;
  text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.9),
    2px 2px 3px rgba(0, 0, 0, 0.3);
`
