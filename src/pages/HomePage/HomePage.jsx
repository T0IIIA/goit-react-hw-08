import { useSelector } from 'react-redux'
import s from './HomePage.module.css'
import { selectLoggedIn } from '../../redux/auth/selectors'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const isLoggedIn = useSelector(selectLoggedIn)

  return (
    <div className={s.container}>
      <p>If you need to save some contacts: </p>
      <h2>WELCOME to PHONEBOOK APP 😊</h2>
      <ul className={s.list}>
        <li className={s.item}>
          {!isLoggedIn && (
            <p className={s.forUse}>
              {' '}
              <Link className={s.toLogin} to='/login'>login</Link> for use it
            </p>
          )}
          <img
            src='/phonebookScreenshot.png'
            alt='phonebook screenshot'
            width={400}
            className={s.screen}
          />
        </li>
      </ul>
    </div>
  )
}

export default HomePage
