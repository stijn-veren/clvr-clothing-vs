// components
import APP_DATA from '../../assets/app.data.js'

// styles
import { FooterStyled } from './footer.styles.js'

const Footer = () => (
  <FooterStyled>
    <p>
      {APP_DATA.fullName} <br /> &copy; {APP_DATA.copyright}
    </p>
    <p>
      {APP_DATA.phone}
      <br />
      {APP_DATA.email}
    </p>
  </FooterStyled>
)

export default Footer
