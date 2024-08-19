import s from './ContactsPage.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import ContactForm from '../../components/ContactForm/ContactForm'
import SearchBox from '../../components/Contacts/SearchBox/SearchBox'
import ContactList from '../../components/ContactList/ContactList'
import { fetchContacts } from '../../redux/contacts/operations'
import { selectError, selectLoading } from '../../redux/contacts/selectors'

const ContactsPage = () => {
  const loading = useSelector(selectLoading)
  const error = useSelector(selectError)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <div className={s.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <h2>Loading...please wait</h2>}
      {error && <h2>Oops...something went wrong!</h2>}
      <ContactList />
    </div>
  )
}

export default ContactsPage
