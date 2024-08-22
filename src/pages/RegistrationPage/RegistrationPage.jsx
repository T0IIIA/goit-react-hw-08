import { ErrorMessage, Field, Form, Formik } from 'formik'
import s from './RegistrationPage.module.css'
import { nanoid } from '@reduxjs/toolkit'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { registerThunk } from '../../redux/auth/operations'
import { selectLoggedIn } from '../../redux/auth/selectors'

const RegistrationPage = () => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(selectLoggedIn)
  
  const initialValues = {
    name: '',
    email: '',
    password: '',
  }

  const fieldIdName = nanoid(6)
  const fieldIdMail = nanoid(6)
  const fieldIdPassword = nanoid(6)

  const inputRules = Yup.object({
    name: Yup.string().required('Enter name please'),
    email: Yup.string().required('Enter email please'),
    password: Yup.string()
      .required('Sorry, but password is required')
      .min(7, 'minimum 7 characters'),
  })


  const onSubmit = (values, actions) => {
    dispatch(registerThunk(values))
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
      <h2 className={s.head}>account registration</h2>
      <Formik initialValues={initialValues} validationSchema={inputRules} onSubmit={onSubmit}>
        <Form className={s.form}>
          <Field
            className={s.input}
            id={fieldIdName}
            type='name'
            name='name'
            placeholder='enter your name'
          />
          <ErrorMessage name='name' component='span' className={s.error} />

          <Field
            className={s.input}
            id={fieldIdMail}
            type='enter your email'
            name='email'
            placeholder='email'
          />
          <ErrorMessage name='email' component='span' className={s.error} />

          <Field
            className={s.input}
            id={fieldIdPassword}
            type='password'
            name='password'
            placeholder='password'
          />
          <ErrorMessage name='password' component='span' className={s.error} />
          <button className={s.btn} type='submit'>
            register
          </button>
          <p className={s.answer}>
            You already have account?{' '}
            <Link to='/login' className={s.signUp}>
              Sign in!
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  )
}

export default RegistrationPage
