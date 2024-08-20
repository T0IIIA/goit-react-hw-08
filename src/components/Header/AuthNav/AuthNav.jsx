import { Link } from 'react-router-dom'
import s from './AuthNav.module.css'

const AuthNav = () => {
  

  return (
    <div className={s.container}>
      <Link to='register' className={s.link}>register</Link>
      <Link to='login' className={s.link}>login</Link>
    </div>
  )
}

export default AuthNav