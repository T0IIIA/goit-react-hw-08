import s from './ContactsPage.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import ContactForm from '../../components/PhoneBook/ContactForm/ContactForm'
import SearchBox from '../../components/PhoneBook/SearchBox/SearchBox'
import ContactList from '../../components/PhoneBook/ContactList/ContactList'
import { fetchContacts } from '../../redux/contacts/operations'
import { selectError, selectLoading } from '../../redux/contacts/selectors'
import { selectLoggedIn } from '../../redux/auth/selectors'
import { Navigate } from 'react-router-dom'

const ContactsPage = () => {
  const isLoggedIn = useSelector(selectLoggedIn)
  const loading = useSelector(selectLoading)
  const error = useSelector(selectError)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])


  if (!isLoggedIn) {
    return <Navigate to='/' />
  }
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
