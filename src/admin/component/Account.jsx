import { Close, Create, Visibility, VisibilityOff } from '@mui/icons-material'
import { Box, Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, MenuItem, Modal, Select, TextField } from '@mui/material'
import { format } from 'date-fns'
import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { style } from '../../customer/components/Auth/AuthModal'
import { useNavigate } from 'react-router-dom'
import { changePassword, updateUser } from '../../state/Auth/Action'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from "yup"
import { SET_ERROR_NULL } from '../../state/Auth/ActionType'


const initialValues = {
  currentPassword: "",
  confirmNewPassword: '',
  newPassword: ''
  // role: 'ROLE_CUSTOMER',
}
const validationSchema = Yup.object({
  currentPassword: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .required('Required'),
  newPassword: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .required('Required'),
  confirmNewPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
    .required('Required')
})





const Account = () => {


  const [showPassword, setShowPassword] = useState(false)
  const togglePassword = () => setShowPassword(!showPassword)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const auth = useSelector(store => store.auth)
  const [title, setTitle] = useState("")
  const [att, setAtt] = useState("")
  const [value, setValue] = useState("")
  const formikRef = useRef(null);


  const [open, setOpen] = useState(false)
  const handleClose = () => {
    dispatch({type:SET_ERROR_NULL})
    setOpen(false)
  }
  const hanleUpdate = (title, att, value) => {
    setTitle(title)
    setAtt(att)
    setValue(value)
    setOpen(true)
  }
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmitPassword = (values) => {
    console.log(values);
    dispatch(changePassword(values))
  }
  const handleSubmit = () => {
    let reqData = {}
    if (att === 'gender') {
      const gender = value === 'Male' ? true : false
      reqData = {
        ...reqData,
        id: auth.user?.id,
        [att]: gender,
      }
    } else {
      reqData = {
        ...reqData,
        id: auth.user?.id,
        [att]: value,
      }
    }
    console.log(reqData);
    if (value.length > 0) {
      dispatch(updateUser(reqData))
      handleClose()
    } else {
      console.log("Ban chua nhap gi het");

    }
  }
  return (
    <div className='flex justify-center flex-col items-center'>
      <div className='w-[60%]'>
        <h1 className='text-3xl font-bold py-5'>Account Settings</h1>
        <h2 className='text-xl font-semibold py-5'>Basic Info</h2>
        <div className='my-2'>
          <div className='flex justify-between px-5 py-5 border-t border-b border-gray-200'>
            <span className=' text-md'>First Name</span>
            <div className='flex items-center'>
              <span className='font-semibold mr-10'>{`${auth.user?.firstName}`}</span>
              <IconButton onClick={() => hanleUpdate("First Name", 'firstName', auth.user?.firstName)} size='small'>
                <Create />
              </IconButton>
            </div>
          </div>
          <div className='flex justify-between px-5 py-5 border-t border-b border-gray-200'>
            <span className=' text-md'>Last Name</span>
            <div className='flex items-center'>
              <span className='font-semibold mr-10'>{`${auth.user?.lastName}`}</span>
              <IconButton onClick={() => hanleUpdate("Last Name", 'lastName', auth.user?.lastName)} size='small'>
                <Create />
              </IconButton>
            </div>
          </div>
          <div className='flex justify-between px-5 py-5 border-b border-gray-200'>
            <span className=' text-md'>Date of birth</span>
            <div className='flex items-center'>
              <span className='font-semibold mr-10'>05 /07 /2004</span>
              <IconButton onClick={() => hanleUpdate("Date of Birth", '', '05 /07 /2004')} size='small'>
                <Create />
              </IconButton>
            </div>
          </div>
          <div className='flex justify-between px-5 py-5 border-b border-gray-200'>
            <span className=' text-md'>Gender</span>
            <div className='flex items-center'>
              <span className='font-semibold mr-10'>{auth.user?.gender ? 'Male' : 'Female'}</span>
              <IconButton onClick={() => hanleUpdate("Gender", 'gender', auth.user?.gender ? 'Male' : 'Female')} size='small'>
                <Create />
              </IconButton>
            </div>
          </div>
          <div className='flex justify-between px-5 py-5 border-b border-gray-200'>
            <span className=' text-md'>Email</span>
            <div className='flex items-center'>
              <span className='font-semibold mr-10'>{auth.user?.email}</span>
              <IconButton onClick={() => hanleUpdate("Email", 'email', auth.user?.email)} size='small'>
                <Create />
              </IconButton>
            </div>
          </div>
          <div className='flex justify-between px-5 py-5 border-b border-gray-200'>
            <span className=' text-md'>Join date</span>
            <span className='font-semibold mr-10'>{format(new Date(auth.user?.createAt || "2000-01-01T00:00:00"), "dd/MM/yyyy HH:mm:ss")}</span>
          </div>
        </div>

        <h2 className='text-xl font-semibold py-5 '>Account Info</h2>
        <div className='my-2'>
          <div className='flex justify-between px-5 py-5 border-t border-b border-gray-200'>
            <span className=' text-md'>Username</span>

            <span className='font-semibold mr-10'>{auth.user?.email}</span>
          </div>
          <div className='flex justify-between px-5 py-5 border-b border-gray-200'>
            <span className=' text-md'>Password</span>
            <div className='flex items-center'>
              <input type='password' value='123456' className='text-right mr-10 bg-transparent' disabled />
              <IconButton onClick={() => hanleUpdate("Password", 'password', '')} size='small'>
                <Create />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className='flex justify-end'>
            <IconButton onClick={handleClose}>
              <Close />
            </IconButton>
          </div>
          
          <div>
            <h1 className='text-2xl font-semibold p-2 ml-2'>{`Update ${title}`}</h1>
          </div>
          <p className='text-center py-2 text-red-400'>{auth?.error}</p>
          <p className='text-center py-2 text-green-500'>{auth?.success}</p>
          {title === "Password" ?


            <div className='p-2'>
              <Formik
                initialValues={initialValues}
                onSubmit={handleSubmitPassword}
                validationSchema={validationSchema}
                innerRef={formikRef}
              >
                {() => (
                  <>
                    <Field
                      as={TextField}
                      type="password"
                      name="currentPassword"
                      label="Current Password"
                      fullWidth
                      variant="outlined"
                      margin="normal"
                      InputProps={{
                        style: {
                          borderRadius: '50px', /* Điều chỉnh giá trị để thay đổi độ cong */
                        },
                      }}
                      helperText={
                        <ErrorMessage name="currentPassword">
                          {(msg) => <span className='text-red-600'>{msg}</span>}
                        </ErrorMessage>
                      }
                    />

                    <Field
                      as={TextField}
                      type={showPassword ? "text" : "password"}
                      name="newPassword"
                      label="New Password"
                      fullWidth
                      variant="outlined"
                      margin="normal"
                      InputProps={{
                        style: {
                          borderRadius: '50px', /* Điều chỉnh giá trị để thay đổi độ cong */
                        },
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={togglePassword} edge="end">
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                      helperText={
                        <ErrorMessage name="newPassword">
                          {(msg) => <span className='text-red-600'>{msg}</span>}
                        </ErrorMessage>
                      }
                    />

                    <Field
                      as={TextField}
                      type="password"
                      name="confirmNewPassword"
                      label="Confirm New Password"
                      fullWidth
                      variant="outlined"
                      margin="normal"
                      InputProps={{
                        style: {
                          borderRadius: '50px', /* Điều chỉnh giá trị để thay đổi độ cong */
                        },
                      }}
                      helperText={
                        <ErrorMessage name="confirmNewPassword">
                          {(msg) => <span className='text-red-600'>{msg}</span>}
                        </ErrorMessage>
                      }
                    />
                  </>
                )}
              </Formik>
              <span className='underline mt-5 font-semibold text-red-500 ml-2 cursor-pointer' onClick={() => navigate('/account/forgotPassword?open=true')}>
                Have you forgotten your password?
              </span>
            </div>
            : title === 'Gender' ?
              <div className='p-2'>
                <p className='text-lg py-4 ml-2 font-semibold'>{`${title}`}</p>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">{`${title}`}</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label="Gender"
                    onChange={handleChange}
                  >
                    <MenuItem value='Male'>Male</MenuItem>
                    <MenuItem value='Female'>Female</MenuItem>
                    <MenuItem value="unspecified" disabled>Unspecified</MenuItem>
                  </Select>
                </FormControl>
              </div>
              :
              <div className='p-2'>
                <p className='text-lg py-4 ml-2 font-semibold'>{`${title}`}</p>
                <TextField
                  onChange={handleChange}
                  sx={{
                    borderRadius: '30px',
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '30px',
                    },
                  }}
                  value={value}
                  variant="outlined"
                  placeholder=""
                  fullWidth
                />
              </div>
          }
          <div>
            <Button fullWidth variant='contained' sx={{ borderRadius: 30, marginTop: 10 }} onClick={title === 'Password' ? () => formikRef.current?.submitForm() : handleSubmitPassword}>
              Save
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default Account
