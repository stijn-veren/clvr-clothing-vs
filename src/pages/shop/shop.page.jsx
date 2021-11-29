// modules
import { Link } from 'react-router-dom'

// components
import { getCatalogueData } from '../../assets/catalogue.data'

const Shop = () => {
  const catalogue = getCatalogueData()

  return (
    <>
      {catalogue.map((item) => (
        <div key={item.id}>
          <p>{item.id}</p>
          <p>
            <Link to={`/shop/${item.name}`}>{item.title}</Link>
          </p>
          <p>{item.name}</p>
          <p>{item.imgUrl}</p>
        </div>
      ))}
    </>
  )
}

export default Shop
