// modules
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

// components
import { getSection } from '../../assets/catalogue.data'

const Section = () => {
  const params = useParams()
  const section = getSection(params.section)

  return (
    <>
      {section.items.map((sectionItem) => (
        <div key={sectionItem.id}>
          <p>id: {sectionItem.id}</p>
          <Link to={`/shop/${section.name}/${sectionItem.id}`}>
            {sectionItem.title}
          </Link>
          <p>name: {sectionItem.name}</p>
          <p>imgUrl: {sectionItem.imgUrl}</p>
          <p>price: {sectionItem.price}</p>
        </div>
      ))}
    </>
  )
}

export default Section
