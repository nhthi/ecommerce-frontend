import { Button, TextField, Typography } from '@mui/material'
import { Field, Formik, Form, ErrorMessage } from 'formik'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as Yup from "yup"
import { login } from '../../../state/Auth/Action'
import { SET_ERROR_NULL } from '../../../state/Auth/ActionType'



const initialValues = {
  email: "",
  password: ""

}

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Email is requires"),
  password: Yup.string().required('Required')
})




const Login = ({ handleClose }) => {

  const auth = useSelector(store => store.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = (values) => {
    
    dispatch(login({ values, handleClose }))
  }
  useEffect(() => {
    dispatch({ type: SET_ERROR_NULL })
},[])
  return (
    <div>
      <Typography variant='h5' className='text-center'>
        Login
      </Typography>
      {
        auth.error &&
        <h2 className='text-center text-sm mt-2 text-red-500'>
          {auth.error}
        </h2>
      }
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field
            as={TextField}
            name="email"
            label="Email"
            fullWidth
            variant="outlined"
            margin="normal"
            helperText={
              <ErrorMessage name="email">
                {(msg) => <span className='text-red-600'>{msg}</span>}
              </ErrorMessage>
            }
          />
          <Field
            as={TextField}
            type="password"
            name="password"
            label="Password"
            fullWidth
            variant="outlined"
            margin="normal"
            helperText={
              <ErrorMessage name="password">
                {(msg) => <span className='text-red-600'>{msg}</span>}
              </ErrorMessage>
            }
          />
          <Button sx={{ marginTop: 2, padding: '1rem' }} type='submit' fullWidth variant='contained'>Login</Button>
        </Form>
      </Formik>
      <Typography variant='body2' align='center' sx={{ mt: 3 }}>
        Don't have an account ?
        <Button onClick={() => navigate('/account/register?open=true')}>Register</Button>
      </Typography>
      <Typography variant='body2' align='center' sx={{ mt: 3 }}>
        <Button onClick={() => navigate('/account/forgotpassword?open=true')}>Forgot Password</Button>
      </Typography>
    </div>
  )
}

export default Login
