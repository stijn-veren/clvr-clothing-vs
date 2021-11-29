// components
import NavLink from '../nav-link'

// styles
import { Nav } from './navigation.styles'

const Navigation = ({ data }) => {
  const active = false

  return (
    <Nav>
      {data.menu.map((item) => (
        <NavLink
          key={item.id}
          link={item.link}
          title={item.title}
          active={active}
        />
      ))}
    </Nav>
  )
}

export default Navigation
