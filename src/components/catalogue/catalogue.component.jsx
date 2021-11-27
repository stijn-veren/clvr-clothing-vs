// components
import CATALOGUE_DATA from '../../assets/catalogue.data'
import CatalogueItem from '../catalogue-item'

// styles
import './catalogue.styles.sass'

const Catalogue = () => (
  <section>
    <h1>Catalogue</h1>

    {CATALOGUE_DATA.map((item) => (
      <CatalogueItem key={item.id} item={item.name} />
    ))}
  </section>
)

export default Catalogue
