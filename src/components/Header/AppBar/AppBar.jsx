import s from './AppBar.module.css'
import Navigation from '../Navigation/Navigation'
import AuthNav from '../AuthNav/AuthNav'

const AppBar = () => {



  return (
    <div className={s.header}>
      <Navigation />
      <AuthNav />
    </div>
  )
}

export default AppBar
