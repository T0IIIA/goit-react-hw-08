import { Link } from 'react-router-dom'
import s from './AuthNav.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectLoggedIn, selectName } from '../../../redux/auth/selectors'
import { logoutThunk } from '../../../redux/auth/operations'

const AuthNav = () => {
  const isLogged = useSelector(selectLoggedIn)
  const userName = useSelector(selectName)
  const dispatch = useDispatch()

  return (
    <div className={s.container}>
      {!isLogged && (
        <>
          <Link to='register' className={s.link}>
            register
          </Link>
          <Link to='login' className={s.link}>
            login
          </Link>
        </>
      )}

      {isLogged && (
        <>
          <p>Hello {userName} 👋</p>
          <button className={s.logout_btn} onClick={() => dispatch(logoutThunk())}>Logout</button>
        </>
      )}
    </div>
  )
}

export default AuthNav
