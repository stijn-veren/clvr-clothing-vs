// modules
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// components
import Layout from './pages/layout/layout.page'
import Main from './pages/main/main.page'
import Shop from './pages/shop/shop.page'
import About from './pages/about/about.page'
import Contacts from './pages/contacts/contacts.page'
import Section from './pages/section/section.page'
import Product from './pages/product/product.page'

// styles
import './App.sass'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Main />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route exact path="/shop/:section" element={<Section />} />
          <Route exact path="/shop/:section/:productId" element={<Product />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contacts" element={<Contacts />} />{' '}
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
