// modules
import { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages
import Layout from './pages/layout/layout.page'
import Main from './pages/main/main.page'
import Shop from './pages/shop/shop.page'
import About from './pages/about/about.page'
import Contacts from './pages/contacts/contacts.page'
import Section from './pages/section/section.page'
import Product from './pages/product/product.page'
import NotFoundPage from './pages/not-found/not-found.page'

// styles
import './App.sass'

class App extends Component {
  constructor() {
    super()
    this.state = { data: { title: '', menu: [] } }
  }

  async componentDidMount() {
    try {
      const response = await fetch(`/data/app.data.json`)
      if (!response.ok) {
        throw Error(response.statusText)
      }
      const json = await response.json()
      this.setState({ data: json })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route element={<Layout data={this.state.data} />}>
            <Route index element={<Main />} />
            <Route exact path="/shop" element={<Shop />} />
            <Route exact path="/shop/:section" element={<Section />} />
            <Route
              exact
              path="/shop/:section/:productId"
              element={<Product />}
            />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contacts" element={<Contacts />} />{' '}
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App
