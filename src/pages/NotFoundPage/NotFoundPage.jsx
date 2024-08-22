import { Link } from 'react-router-dom'
import s from './NotFoundPage.module.css'

const NotFoundPage = () => {
  return (
    <div className={s.container}>
      <div className={s.text}>
        <h1>Opps...Page is not found</h1>
        <p>You can back to site:</p>
        <Link to='/' className={s.link}>
          {' '}
          click here{' '}
        </Link>
      </div>
      <img src='/pageNotFound.png' width='200' />
    </div>
  )
}

export default NotFoundPage