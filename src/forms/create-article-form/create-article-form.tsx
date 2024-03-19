import { useFormik } from 'formik'
import React from 'react'
import { validate } from './validate';
import './create-article-form.scss'

const CreateArticleForm: React.FC = () => {
  
  const formik = useFormik({
    initialValues: {
      description: '',
      short: '',
      text: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className='create-article-form'>
       <label htmlFor="description">First Name</label>
       <input
         id="description"
         name="description"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.description}
       />
       {formik.errors.description ? <div>{formik.errors.description}</div> : null}
       <label htmlFor="short">Last Name</label>
       <input
         id="short"
         name="short"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.short}
       />
        {formik.errors.description ? <div>{formik.errors.short}</div> : null}
       <label htmlFor="text">text Address</label>
       <input
         id="text"
         name="text"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.text}
       />
        {formik.errors.description ? <div>{formik.errors.text}</div> : null}

       <button type="submit">Submit</button>
     </form>
  )
}

export default CreateArticleForm