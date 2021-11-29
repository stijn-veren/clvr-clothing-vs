// modules
import { Link } from 'react-router-dom'

// components
import { getAppData } from '../../assets/app.data.js'
import Navigation from '../navigation'

// styles
import { HeaderStyled, TitleStyled, LogoStyled } from './header.styles.js'

const Header = () => {
  const appData = getAppData()

  return (
    <HeaderStyled>
      <TitleStyled>
        <Link to="/">
          <LogoStyled />
        </Link>
        <h1>{appData.title}</h1>
      </TitleStyled>
      <Navigation />
    </HeaderStyled>
  )
}

export default Header
