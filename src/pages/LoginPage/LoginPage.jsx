import { ErrorMessage, Field, Form, Formik } from 'formik'
import s from './LoginPage.module.css'
import { nanoid } from '@reduxjs/toolkit'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'

const LoginPage = () => {

  const initialValues = {
    email: '',
    password: '',
  }

  const fieldIdMail = nanoid(6)
  const fieldIdPassword = nanoid(6)

  const inputRules = Yup.object({
    email: Yup.string().required('Enter email please'),
    password: Yup.string().required('Sorry, but password is required'),
  })

  const onSubmit = (values, actions) => {
    const fieldsInput = {
      email: values.email,
      password: values.password,
    }
    console.log(fieldsInput)

    actions.resetForm()
  }



  return (
    <div className={s.container}>
      <Link to='/' className={s.backLink}>🔙</Link>
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
            Log In
          </button>
        </Form>
      </Formik>
    </div>
  )
}

export default LoginPage



