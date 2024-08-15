import s from './App.module.css'
import ContactForm from './ContactForm/ContactForm'
import SearchBox from './SearchBox/SearchBox'
import ContactList from './ContactList/ContactList'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContacts } from '../redux/contactsOps'
import { useEffect } from 'react'
import { selectError, selectLoading } from '../redux/selectors'


const App = () => {
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

export default App