// styles
import { Item, Span, Text, Letter } from './catalogue-item.styles.js'

const CatalogueItem = ({ title, name, imgUrl }) => {
  const href = '/' + name

  return (
    <Item href={href} imgUrl={imgUrl} name={name}>
      <Span />
      <Text>
        <Letter>{name[0]}</Letter>
        {title.substring(1)}
      </Text>
    </Item>
  )
}

export default CatalogueItem
