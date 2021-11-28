// components
import CATALOGUE_DATA from '../../assets/catalogue.data'
import CatalogueItem from '../catalogue-item'

// styles
import { CatalogueContainer } from './catalogue.styles.js'

const Catalogue = () => (
  <section>
    <h1>Catalogue</h1>

    <CatalogueContainer>
      {CATALOGUE_DATA.map((item) => {
        return (
          <CatalogueItem
            key={item.id}
            title={item.title}
            name={item.name}
            imgUrl={item.imgUrl}
          />
        )
      })}
    </CatalogueContainer>
  </section>
)

export default Catalogue
