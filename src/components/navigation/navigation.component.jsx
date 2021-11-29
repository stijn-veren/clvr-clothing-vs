// components
import { getAppData } from '../../assets/app.data.js'
import NavLink from '../nav-link'

// styles
import { Nav } from './navigation.styles'

const Navigation = () => {
  const active = false
  const appData = getAppData()

  return (
    <Nav>
      {appData.menu.map((item) => (
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
