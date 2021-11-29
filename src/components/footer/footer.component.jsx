// components
import {getAppData} from '../../assets/app.data.js'

// styles
import { FooterStyled } from './footer.styles.js'

const Footer = () => {
  const appData = getAppData()
  return(
  <FooterStyled>
    <p>
      {appData.fullName} <br /> &copy; {appData.copyright}
    </p>
    <p>
      {appData.phone}
      <br />
      {appData.email}
    </p>
  </FooterStyled>
)}

export default Footer
