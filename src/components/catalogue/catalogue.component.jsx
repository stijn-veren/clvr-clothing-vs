// components
import CATALOGUE_DATA from '../../assets/catalogue.data'
import CatalogueItem from '../catalogue-item'

// styles
import './catalogue.styles.sass'

const Catalogue = () => (
  <section>
    <h1>Catalogue</h1>

    <div className="catalogue-items">
      {CATALOGUE_DATA.map((item) => {
        return (
          <CatalogueItem
            key={item.id}
            name={item.name}
            url={item.url}
            imgUrl={item.imgUrl}
          />
        )
      })}
    </div>
  </section>
)

export default Catalogue
