import styled from 'styled-components'

export const CatalogueContainer = styled.div`
  width: 90%;
  padding: 20px 5%;
  display: grid;
  grid-gap: 20px;
  grid-template-areas:
    'hats hats jackets jackets sneakers sneakers'
    'womens womens womens mens mens mens';
`
