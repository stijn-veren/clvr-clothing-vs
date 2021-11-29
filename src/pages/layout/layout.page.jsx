// modules
import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

// components
import Header from '../../components/header'
import Footer from '../../components/footer'

const Layout = ({data}) => {
  return (
    <Fragment>
      <Header data={data} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  )
}

export default Layout
