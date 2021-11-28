// styles
import {Link} from './nav-link.styles'

const NavLink = ({link, title}) => (
  <Link href={`/${link}`}>{title}</Link>
)

export default NavLink
