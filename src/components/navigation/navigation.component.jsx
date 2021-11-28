// components
import APP_DATA from '../../assets/app.data'
import NavLink from '../nav-link'

// styles
import { Nav } from './navigation.styles'

const Navigation = () => {
  const active = false

  return (
    <Nav>
      {APP_DATA.menu.map((item) => (
        <NavLink link={item.link} title={item.title} active={active} />
      ))}
    </Nav>
  )
}

export default Navigation
