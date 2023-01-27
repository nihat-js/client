import './index.scss'
import axios from "axios"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const SignupSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  category: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  description: Yup.string().min(2, 'Too Short!').max(200, 'Too Long!').required('Required'),
  price: Yup.number().min(0).required('Required'),
});



export default function Index() {
  const URL = "http://localhost:4000/products"

  async function add(values,setSubmitting) {
    toast.dismiss()
    toast("Please wait");
    setSubmitting(false)
    let result = await axios.post(URL,values)
    toast.dismiss()
    setSubmitting(true)
    if (!result){
      toast("Error Could not add product. Maybe you entered price wrong ")
    }else{
      toast(` Product  " ${values.name} " added successfully`)
    }
  }


  return (
    <section className="add">

      <Formik
        initialValues={{
          name: '',
          category: '',
          description: '',
          price: 0,
        }}
        validationSchema={SignupSchema}
        onSubmit={ (values ,{setSubmitting} ) => {
          add(values,setSubmitting)
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <ToastContainer autoClose={1500} />
            <h2 className='title'> Add products </h2>
            <div className="input-group">
              <Field name="name" placeholder="Name" />
              <ErrorMessage name="name" />
            </div>
            <div className="input-group">
              <Field name="category" placeholder="Category" />
              <ErrorMessage name="category" />
            </div>
            <div className="input-group">
              <Field name="description" placeholder="Description" />
              <ErrorMessage name="description" />
            </div>
            <div className="input-group">
              <Field type="number" name="price" placeholder="Price" />
              <ErrorMessage name="price" />
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </section>

  )
}
