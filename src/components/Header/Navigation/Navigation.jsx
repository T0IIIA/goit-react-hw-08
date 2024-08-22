import { NavLink } from 'react-router-dom'
import s from './Navigation.module.css'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import { selectLoggedIn } from '../../../redux/auth/selectors'

const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active)
  }

  const isLoggedIn = useSelector(selectLoggedIn)


  return (
    <div className={s.container}>
      <NavLink to='/' className={buildLinkClass}>Home</NavLink>
      {isLoggedIn && <NavLink to='contacts' className={buildLinkClass}>PhoneBook</NavLink>}
    </div>
  )
}

export default Navigation
