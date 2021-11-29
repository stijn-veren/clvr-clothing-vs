// modules
import { useParams } from 'react-router-dom'

// components
import { getProduct } from '../../assets/catalogue.data'

const Product = () => {
  let params = useParams()
  const product = getProduct(params.section, params.productId)

  return (
    <>
      <div key={product.id}>
        <p>id: {product.id}</p>
        <p>{product.title}</p>
        <p>name: {product.name}</p>
        <p>imgUrl: {product.imgUrl}</p>
        <p>price: {product.price}</p>
      </div>
    </>
  )
}

export default Product
