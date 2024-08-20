import s from './ContactList.module.css'
import Contact from '../Contact/Contact'
import { selectFilteredContacts } from '../../../redux/filters/selectors'
import NoContacts from './NoContacts'
import { useSelector } from 'react-redux'

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts)

  if (contacts.length === 0) {
    return <NoContacts />
  }
  return (
    <ul className={s.list}>
      {contacts.map((obj) => (
        <li className={s.item} key={obj.id}>
          <Contact contacts={obj} />
        </li>
      ))}
    </ul>
  )
}

export default ContactList
