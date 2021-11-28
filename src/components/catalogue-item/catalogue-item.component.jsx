// styles
import './catalogue-item.styles.sass'

const CatalogueItem = ({ name, url, imgUrl }) => {
  const backgroundImage = {
    backgroundImage: `url("/images/${imgUrl}")`,
    gridArea: name,
  }
  console.log(backgroundImage)

  return (
    <a
      href={url}
      className="catalogue-item"
      style={backgroundImage}
    >
      <span>{name}</span>
    </a>
  )
}

export default CatalogueItem
