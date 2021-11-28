// components
import APP_DATA from '../../assets/app.data'
import Navigation from '../navigation'

// styles
import { HeaderStyled, TitleStyled, LogoStyled } from './header.styles.js'

const Header = () => (
  <HeaderStyled>
    <TitleStyled>
      <LogoStyled />
      <h1>{APP_DATA.title}</h1>
    </TitleStyled>
    <Navigation />
  </HeaderStyled>
)

export default Header
