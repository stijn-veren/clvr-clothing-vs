// styles
import { Item, Span, Letter } from './catalogue-item.styles.js'

const CatalogueItem = ({ title, name, imgUrl }) => {
  const href = '/' + name

  return (
    <Item href={href} imgUrl={imgUrl} name={name}>
      <Span>{title}</Span>
      <Letter>{name[0]}</Letter>
    </Item>
  )
}

export default CatalogueItem
