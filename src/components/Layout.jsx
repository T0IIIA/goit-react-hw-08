import { Outlet } from 'react-router-dom'
import AppBar from './Header/AppBar/AppBar'

const Layout = () => {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  )
}

export default Layout
