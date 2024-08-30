import { Button, Grid,  IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import { Field, Formik, Form, ErrorMessage } from 'formik'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import * as Yup from "yup"
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../../state/Auth/Action'
import { SET_ERROR_NULL } from '../../../state/Auth/ActionType'



const initialValues = {
    firstName: '',
    lastName: '',
    email: "",
    password: "",
    confirmPassword: ''
    // role: 'ROLE_CUSTOMER',
}
const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is requires"),
    lastName: Yup.string().required("Last name is requires"),
    email: Yup.string().email("Invalid email format").required("Email is requires"),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .matches(/[0-9]/, 'Password must contain at least one number')
        .required('Required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required')
})






const Register = ({ handleClose }) => {

    const auth = useSelector(store => store.auth)
    const dispatch = useDispatch()

    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const togglePassword = () => setShowPassword(!showPassword)

    const handleSubmit = (values) => {
        console.log(values);
        dispatch(register({ values, handleClose }))
    }
    useEffect(() => {
        dispatch({ type: SET_ERROR_NULL })
    },[])
    return (
        <div>
            <Typography variant='h5' className='text-center'>
                Register
            </Typography>
            {
                auth.error &&
                <h2 className='text-center text-sm mt-2 text-red-500'>
                    {auth.error}
                </h2>
            }
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <Form>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Field
                                as={TextField}
                                name="firstName"
                                label="First name"
                                fullWidth
                                variant="outlined"
                                margin="normal"
                                helperText={
                                    <ErrorMessage name="firstName">
                                        {(msg) => <span className='text-red-600'>{msg}</span>}
                                    </ErrorMessage>
                                }
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Field
                                as={TextField}
                                name="lastName"
                                label="Last name"
                                fullWidth
                                variant="outlined"
                                margin="normal"
                                helperText={
                                    <ErrorMessage name="lastName">
                                        {(msg) => <span className='text-red-600'>{msg}</span>}
                                    </ErrorMessage>
                                }
                            />
                        </Grid>
                    </Grid>


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
                        type={showPassword ? "text" : "password"}
                        name="password"
                        label="Password"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={togglePassword} edge="end">
                                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                        helperText={
                            <ErrorMessage name="password">
                                {(msg) => <span className='text-red-600'>{msg}</span>}
                            </ErrorMessage>
                        }
                    />

                    <Field
                        as={TextField}
                        type="password"
                        name="confirmPassword"
                        label="Confirm Password"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        helperText={
                            <ErrorMessage name="confirmPassword">
                                {(msg) => <span className='text-red-600'>{msg}</span>}
                            </ErrorMessage>
                        }
                    />
                    {/* <FormControl fullWidth>
                        <InputLabel id="role-simple-select-label">Role</InputLabel>
                        <Field
                            as={Select}
                            labelId="role-simple-select-label                           "
                            id="role-simple-select"
                            label="Role"
                            name="role"
                        >
                            <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
                            <MenuItem value={"ROLE_RESTAURANT_OWNER"}>Restaurant Owner</MenuItem>
                        </Field>
                    </FormControl> */}
                    <Button sx={{ marginTop: 2, padding: '1rem' }} type='submit' fullWidth variant='contained'>Register</Button>
                </Form>
            </Formik>
            <Typography variant='body2' align='center' sx={{ mt: 3 }}>
                If you have an account already ?
                <Button onClick={() => navigate('/account/login?open=true')}>Login</Button>
            </Typography>
        </div>
    )
}

export default Register
