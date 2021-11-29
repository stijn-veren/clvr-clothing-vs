// styles
import { LinkStyled } from './nav-link.styles'

const NavLink = ({ link, title }) => {
  return <LinkStyled to={`/${link}`}>{title}</LinkStyled>
}

export default NavLink
