import { ErrorMessage, Field, Form, Formik } from 'formik'
import s from './LoginPage.module.css'
import { nanoid } from '@reduxjs/toolkit'
import * as Yup from 'yup'
import { Link, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginThunk } from '../../redux/auth/operations'
import { selectLoggedIn } from '../../redux/auth/selectors'

const LoginPage = () => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(selectLoggedIn)

  const initialValues = {
    email: '',
    password: '',
  }

  const fieldIdMail = nanoid(6)
  const fieldIdPassword = nanoid(6)

  const inputRules = Yup.object({
    email: Yup.string().required('Enter your email please'),
    password: Yup.string()
      .required('Sorry, but password is required')
      .min(7, 'minimum 7 characters'),
  })

  const onSubmit = (values, actions) => {

    dispatch(loginThunk(values))

    actions.resetForm()
  }

  if (isLoggedIn) {
    return <Navigate to='/' />
  }
  return (
    <div className={s.container}>
      <Link to='/' className={s.backLink}>
        to home
      </Link>
      <h2 className={s.head}>Log in to continue</h2>
      <Formik initialValues={initialValues} validationSchema={inputRules} onSubmit={onSubmit}>
        <Form className={s.form}>
          <Field
            className={s.input}
            id={fieldIdMail}
            type='email'
            name='email'
            placeholder='enter your email'
          />
          <ErrorMessage name='email' component='span' className={s.error} />
          <Field
            className={s.input}
            id={fieldIdPassword}
            type='password'
            name='password'
            placeholder='enter your password'
          />
          <ErrorMessage name='password' component='span' className={s.error} />
          <button className={s.btn} type='submit'>
            Login
          </button>
          <p className={s.answer}>
            You don`t have account? {' '}
            <Link to='/register' className={s.signUp}>
              Sign up!
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  )
}

export default LoginPage
