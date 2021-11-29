// modules
import { Link } from 'react-router-dom'

// components
import Navigation from '../navigation'

// styles
import { HeaderStyled, TitleStyled, LogoStyled } from './header.styles.js'

const Header = ({ data }) => {
  return (
    <HeaderStyled>
      <TitleStyled>
        <Link to="/">
          <LogoStyled />
        </Link>
        <h1>{data.title}</h1>
      </TitleStyled>
      <Navigation data={data} />
    </HeaderStyled>
  )
}

export default Header
