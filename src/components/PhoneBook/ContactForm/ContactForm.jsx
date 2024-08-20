import s from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { addContact } from '../../../redux/contacts/operations';
import { nanoid } from '@reduxjs/toolkit';








const ContactForm = () => {
  const dispatch = useDispatch()

  const fieldIdName = nanoid(6)
  const fieldIdNumber = nanoid(6)

  const inputRules = Yup.object({
    name: Yup.string().required('This field is required!').min(3).max(50),
    number: Yup.string().required('This field is required!').min(3).max(50)
  })

  const initialValues = {
    name: '',
    number: ''
  }

  const onSubmit = (values, actions) => {
    const newContact = {
      name: values.name,
      number: values.number,
    }
    
    
    dispatch(addContact(newContact))
    actions.resetForm()
  }



  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={inputRules}>
      <Form className={s.form}>

        <label htmlFor={fieldIdName} className={s.label}> Name </label>
        <Field id={fieldIdName} name="name" className={s.input} />
        <ErrorMessage name="name" component="span" className={s.error}/>

        <label htmlFor={fieldIdNumber} className={s.label}> Number </label>
        <Field id={fieldIdNumber} name="number" className={s.input} />
        <ErrorMessage name="number" component="span" className={s.error}/>

        <button type='submit' className={s.button}> Add Contact </button>

      </Form>
    </Formik>
  );
}

export default ContactForm;