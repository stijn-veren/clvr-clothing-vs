// components
import { ReactComponent as Logo } from './assets/clvr-clothing-logo.svg'
import Header from './components/header'
import Catalogue from './components/catalogue'
import Footer from './components/footer'

// styles
import './App.sass'

function App() {
  return (
    <div>
      <Logo />
      Hello, World!
      <Header />
      <Catalogue />
      <Footer />
    </div>
  )
}

export default App
