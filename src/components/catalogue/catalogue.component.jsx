// components
import {getCatalogueData} from '../../assets/catalogue.data'
import CatalogueItem from '../catalogue-item'

// styles
import { CatalogueContainer } from './catalogue.styles.js'

const Catalogue = () => {
  const catalogue = getCatalogueData()

  return(
  <section>
    <CatalogueContainer>
      {catalogue.map((item) => {
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
)}

export default Catalogue
