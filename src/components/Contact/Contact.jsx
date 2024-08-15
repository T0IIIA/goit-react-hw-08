import { useDispatch } from 'react-redux'
import s from './Contact.module.css'
import { FaSquarePhone, FaCircleUser } from 'react-icons/fa6'
import { deleteContact } from '../../redux/contactsOps'


const Contact = ({ contacts }) => {
  const { id, name, number } = contacts
  const dispatch = useDispatch()

  return (
    <>
      <div className={s.contact}>
        <p className={s.name}>
          {' '}
          <FaCircleUser className={s.user_icon} /> {name}
        </p>
        <a href={`tel:${number}`} className={s.phoneNumber}>
          {' '}
          <FaSquarePhone className={s.phone_icon} /> {number}
        </a>
      </div>
      <button type='submit' className={s.deleteBtn} onClick={() => dispatch(deleteContact(id))}>
        {' '}
        Delete{' '}
      </button>
    </>
  )
}

export default Contact