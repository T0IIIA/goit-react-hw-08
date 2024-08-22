import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import HomePage from './pages/HomePage/HomePage.jsx'
import RegistrationPage from './pages/RegistrationPage/RegistrationPage.jsx'
import LoginPage from './pages/LoginPage/LoginPage.jsx'
import ContactsPage from './pages/ContactsPage/ContactsPage.jsx'
import RestrictedRoute from './Routes/RestrictedRoute.jsx'
import PrivateRoute from './Routes/PrivateRoute.jsx'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { refreshUserThunk } from './redux/auth/operations.js'
import { selectIsRefreshing } from './redux/auth/selectors.js'
import Loader from './components/Loader/Loader.jsx'

const App = () => {
  const dispatch = useDispatch()
  const isRefreshing = useSelector(selectIsRefreshing)
  useEffect(() => {
    dispatch(refreshUserThunk())
  }, [dispatch])

  return isRefreshing ? <Loader /> :  (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path='contacts'
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
        </Route>

        <Route
          path='/login'
          element={
            <RestrictedRoute>
              <LoginPage />
            </RestrictedRoute>
          }
        />

        <Route
          path='/register'
          element={
            <RestrictedRoute>
              <RegistrationPage />
            </RestrictedRoute>
          }
        />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
