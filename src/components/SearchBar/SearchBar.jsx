import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from 'react-hot-toast';

import css from "./SearchBar.module.css"

export default function SearchForm({ onSearch }) {

  return (
    <header className={css.header}>
      <Toaster />
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values, actions) => {
          if(values.query.length < 2){
            toast.error("Type at least 2 characters.",{
              duration: 2000,
              position: 'top-right',
              style: {
                height:'70px',
                width:'350px',
                fontSize:'25px'
              },});
            return ;
          }
          onSearch(values.query);
          actions.resetForm();
        }}
      >
        <Form className={css.form}>
          <Field
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={css.input}
          />
          <button type="submit" className={css.button}>Search</button>
        </Form>
      </Formik>
    </header>
  );
}

