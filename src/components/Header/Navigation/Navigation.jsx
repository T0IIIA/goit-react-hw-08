import { NavLink } from 'react-router-dom'
import s from './Navigation.module.css'
import clsx from 'clsx'

const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active)
  }


  return (
    <div className={s.container}>
      <NavLink to='/' className={buildLinkClass}>Home</NavLink>
      <NavLink to='contacts' className={buildLinkClass}>PhoneBook</NavLink>
    </div>
  )
}

export default Navigation
