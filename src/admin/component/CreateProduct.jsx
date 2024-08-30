import { AddPhotoAlternate, Close, TextFieldsTwoTone } from '@mui/icons-material'
import { Button, CircularProgress, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { upload } from '@testing-library/user-event/dist/upload'
import { ErrorMessage, Field, useFormik } from 'formik'
import React, { Fragment, useState } from 'react'
import * as Yup from "yup"
import { useDispatch } from 'react-redux'
import { uploadToCloundinary } from '../../Utils/uploadToCloudinary'
import { createProduct } from '../../state/product/action'


const sizes = [
  {
    name: 'S',
    quantity: 100
  },
  {
    name: 'M',
    quantity: 100
  }, {
    name: 'L',
    quantity: 100
  },
]
const initialValues = {
  title: '',
  description: '',
  brand: '',
  price: '',
  discountPrice: '',
  discountPercent: '',
  quantity: '',
  color: '',
  sizes: sizes,
  topLevelCategory: '',
  secondLevelCategory: '',
  thirdLevelCategory: '',
  imageUrl: ''
}
// const validationSchema = Yup.object({
//   name: Yup.string().required("Name is requires"),
//   email: Yup.string().email("Invalid email format").required("Email is requires"),
// })



const CreateProduct = () => {
  const dispatch = useDispatch()
  const [uploadImage, setUploadImage] = useState(false)
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      const data = {
        title: values.title,
        description: values.description,
        brand: values.brand,
        price: values.price,
        discountPrice: values.discountPrice,
        discountPercent: values.discountPercent,
        quantity: values.quantity,
        color: values.color,
        sizes: values.sizes,
        topLevelCategory: values.topLevelCategory,
        secondLevelCategory: values.secondLevelCategory,
        thirdLevelCategory: values.thirdLevelCategory,
        imageUrl: values.imageUrl
      }
      console.log("data ", data);
      dispatch(createProduct(data))
    }
  })

  const handleSizeChange = (e, index) => {
    let { name, value } = e.target
    name === "size_quantity" ? name = "quantity" : name = e.target.name
    const sizes = [...formik.values.sizes]
    sizes[index][name] = value
    formik.setFieldValue("sizes", sizes)
  }

  const handleImageChange = async (e) => {
    const file = e.target.files[0]
    setUploadImage(true)
    const image = await uploadToCloundinary(file, 'image')
    formik.setFieldValue("imageUrl", image)
    setUploadImage(false)
  }

  const handleRemoveImage = (index) => {
    formik.setFieldValue("imageUrl", null)
  }

  return (
    <div className='lg:flex items-center justify-center min-h-screen'>
      <div className='lg:max-w-4xl'>
        <h1 className='font-bold text-2xl text-center pb-2'>
          Add New Product
        </h1>
        <form className='space-y-4' onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item className='flex flex-wrap gap-5' xs={12}>
              <input
                accept='image/*'
                id='fileInput'
                style={{ display: 'none' }}
                onChange={handleImageChange}
                type='file'
              />
              <label className='relative' htmlFor='fileInput'>
                <span className='w-24 h-24 cursor-pointer flex items-center justify-center
                    p-3 border rounded-md border-gray-600'>
                  <AddPhotoAlternate className='text' />
                </span>
                {
                  uploadImage &&
                  <div className='absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center'>
                    <CircularProgress />
                  </div>
                }
              </label>
              <div className='flex flex-wrap gap-2'>
                {formik.values.imageUrl &&
                  <div className='relative'>
                    <img
                      className='w-24 h-24 object-cover'
                      alt=''
                      src={formik.values.imageUrl}
                    />
                    <IconButton
                      onClick={() => handleRemoveImage()}
                      sx={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        outline: 'none'
                      }}>
                      <Close sx={{ fontSize: '1rem' }} />
                    </IconButton>
                  </div>
                }
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="title"
                name="title"
                label="Title"
                variant='outlined'
                onChange={formik.handleChange}
                value={formik.values.title}


              >
              </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="brand"
                name="brand"
                label="Brand"
                variant='outlined'
                onChange={formik.handleChange}
                value={formik.values.brand}


              >
              </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="color"
                name="color"
                label="Color"
                variant='outlined'
                onChange={formik.handleChange}
                value={formik.values.color}
              >
              </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="quantity"
                name="quantity"
                label="Quantity"
                variant='outlined'
                onChange={formik.handleChange}
                value={formik.values.quantity}
              >
              </TextField>
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                id="price"
                name="price"
                label="Price"
                variant='outlined'
                onChange={formik.handleChange}
                value={formik.values.price}
              >
              </TextField>
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                id="discountPrice"
                name="discountPrice"
                label="Discount Price"
                variant='outlined'
                onChange={formik.handleChange}
                value={formik.values.discountPrice}
              >
              </TextField>
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                id="discountPercent"
                name="discountPercent"
                label="Discount Percent"
                variant='outlined'
                onChange={formik.handleChange}
                value={formik.values.discountPercent}
              >
              </TextField>
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-autowidth-label">Top Level Category</InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={formik.values.topLevelCategory}
                  name="topLevelCategory"
                  onChange={formik.handleChange}
                  label="Top Level Category"
                >
                  <MenuItem value={'Men'}>{'Men'}</MenuItem>
                  <MenuItem value={'Women'}>{'Women'}</MenuItem>
                  <MenuItem value={'Kids'}>{'Kids'}</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-autowidth-label">Second Level Category</InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={formik.values.secondLevelCategory}
                  name="secondLevelCategory"
                  onChange={formik.handleChange}
                  label="Second Level Category"
                >
                  <MenuItem value={'Clothing'}>{'Clothing'}</MenuItem>
                  <MenuItem value={'Shoes'}>{'Shoes'}</MenuItem>
                  <MenuItem value={'Hat'}>{'Hat'}</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-autowidth-label">Third Level Category</InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={formik.values.thirdLevelCategory}
                  name="thirdLevelCategory"
                  onChange={formik.handleChange}
                  label="Third Level Category"
                >
                  <MenuItem value={'Suit'}>{'Suit'}</MenuItem>
                  <MenuItem value={'Vest'}>{'Vest'}</MenuItem>
                  <MenuItem value={'Shirt'}>{'Shirt'}</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                id="description"
                name="description"
                label="Description"
                variant='outlined'
                onChange={formik.handleChange}
                value={formik.values.description}
              >
              </TextField>
            </Grid>
            {
              sizes.map((item,index) =>
                <Fragment key={item.name}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      id={`size_${item.name}`}
                      name={`size_name`}
                      label="Size name"
                      variant='outlined'
                      onChange={(e)=>handleSizeChange(e,index)}
                      value={formik.values.sizes[index].name}
                    >
                    </TextField>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      id={`size_quantity`}
                      name={`size_quantity`}
                      label="Quantity"
                      variant='outlined'
                      onChange={(e)=>handleSizeChange(e,index)}
                      value={formik.values.sizes[index].quantity}
                    >
                    </TextField>
                  </Grid>
                </Fragment>
              )
            }
          </Grid>
          <Button type='submit' variant='contained' color='primary' >Create Product</Button>
        </form>
      </div>
    </div>
  )
}

export default CreateProduct
