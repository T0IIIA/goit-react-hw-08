import s from './ContactList.module.css'

const NoContacts = () => {
  return (
    <ul className={s.no_contacts_list}>
      <li className={s.item}>
        <p className={s.stub}>no contacts found</p>
      </li>
    </ul>
  )
}

export default NoContacts