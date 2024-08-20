import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import HomePage from './pages/HomePage/HomePage.jsx'
import RegistrationPage from './pages/RegistrationPage/RegistrationPage.jsx'
import LoginPage from './pages/LoginPage/LoginPage.jsx'
import ContactsPage from './pages/ContactsPage/ContactsPage.jsx'
import RestrictedRoute from './Routes/RestrictedRoute.jsx'
import PrivateRoute from './Routes/PrivateRoute.jsx'

const App = () => {


  return (
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
      </Routes>
    </>
  )
}

export default App
