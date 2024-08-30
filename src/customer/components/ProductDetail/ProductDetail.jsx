/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    theme: {
      extend: {
        gridTemplateRows: {
          '[auto,auto,1fr]': 'auto auto 1fr',
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
'use client'

import { useEffect, useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'
import { Box, Button, Grid, LinearProgress, Rating } from '@mui/material'
import ProductReviewCard from './ProductReviewCard'
import { products } from '../HomeSectionCarousel/productData'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { findProductById } from '../../../state/product/action'
import { addItemToCart } from '../../../state/Cart/action'


const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ProductDetail() {
    const productReducer = useSelector(store => store.product)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { productId } = useParams()

    const product = {
        name: productReducer.product?.title || 'Basic Tee 6-Pack',
        price: '$192',
        href: '#',
        breadcrumbs: [
            { id: 1, name: productReducer.product?.category?.parentCategory?.parentCategory?.name || 'Men', href: '#' },
            { id: 2, name: productReducer.product?.category?.parentCategory?.name || 'Clothing', href: '#' },
        ],
        images: [
            {
                src: productReducer.product?.imageUrl ,
                alt: productReducer.product?.imageUrl ,
            },
            {
                src: productReducer.product?.imageUrl ,
                alt: productReducer.product?.imageUrl ,
            },
            {
                src: productReducer.product?.imageUrl ,
                alt: productReducer.product?.imageUrl ,
            },
            {
                src: productReducer.product?.imageUrl ,
                alt: productReducer.product?.imageUrl ,
            },
        ],
        colors: [
            { name: productReducer.product?.color || 'White', class: `bg-${productReducer.product?.color.toLowerCase()}`, selectedClass: 'ring-gray-400' },
        ],
        sizes: productReducer.product?.sizes?.map(item => ({
            name: item.name,
            inStock: item.quantity !== 0
        })) || [{ name: 'S', inStock: true }],
        description:
            productReducer.product?.description || 'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
        highlights: [
            'Hand cut and sewn locally',
            'Dyed with our proprietary colors',
            'Pre-washed & pre-shrunk',
            'Ultra-soft 100% cotton',
        ],
        details:
            'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
    }
    const [selectedColor, setSelectedColor] = useState(product.colors[0])
    const [selectedSize, setSelectedSize] = useState(product.sizes[0])
    const auth = useSelector(store=>store.auth)
    const handleAddToCart = () => {
        if(auth.user){
            const data = {
                productId,
                size: selectedSize.name
            }
            dispatch(addItemToCart(data))
            navigate('/cart')
        }else{
            navigate("/account/login?open=true")
        }
    }

    useEffect(() => {
        dispatch(findProductById(productId))
    }, [productId])

    return (
        <div className="bg-white">
            <div className="pt-6">
                <nav aria-label="Breadcrumb">
                    <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        {product.breadcrumbs.map((breadcrumb) => (
                            <li key={breadcrumb.id}>
                                <div className="flex items-center">
                                    <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                                        {breadcrumb.name}
                                    </a>
                                    <svg
                                        fill="currentColor"
                                        width={16}
                                        height={20}
                                        viewBox="0 0 16 20"
                                        aria-hidden="true"
                                        className="h-5 w-4 text-gray-300"
                                    >
                                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                    </svg>
                                </div>
                            </li>
                        ))}
                        <li className="text-sm">
                            <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                                {product.name}
                            </a>
                        </li>
                    </ol>
                </nav>

                <section className='grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10'>
                    {/* Image gallery */}
                    <div className="flex flex-col items-center">
                        <div className="max-w-[30rem] max-h-[35rem] overflow-hidden rounded-lg">
                            <img
                                alt={product.images[0].alt}
                                src={product.images[0].src}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="flex items-center justify-center flex-wrap space-x-5">
                            {product.images.map((image, index) => <div key={index} className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg w-[5rem] h-[5rem] mt-4">
                                <img
                                    alt={image.alt}
                                    src={image.src}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>)}
                        </div>

                    </div>

                    {/* Product info */}
                    <div className="lg:col-span-1 max-w-2xl mt-auto px-4 pb-10 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-16">
                        <div className="lg:col-span-2">
                            <h1 className="text-lg font-semibold lg:text-xl text-gray-900">{productReducer.product?.brand}</h1>
                            <h1 className="text-lg lg:text-xl text-gray-900 opacity-60 py-1">{productReducer.product?.title}</h1>
                        </div>

                        {/* Options */}
                        <div className="mt-4 lg:row-span-3 lg:mt-0">
                            <h2 className="sr-only">Product information</h2>
                            <div className='flex items-center space-x-5 text-lg lg:text-xl mt-6 text-gray-900'>
                                <p className='font-semibold'>{productReducer.product?.discountPrice}$</p>
                                <p className='opacity-50 line-through'>{productReducer.product?.price}$</p>
                                <p className='font-semibold text-green-600'>{productReducer.product?.discountPercent}% off</p>
                            </div>
                            {/* Reviews */}
                            <div className="mt-6">
                                <div className='flex items-center space-x-3'>
                                    <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                                    <p className='opacity-50 text-sm'>1452 Ratings</p>
                                    <p className='text-sm font-medium text-indigo-600 hover:text-indigo-500'>4578 Reviews</p>

                                </div>
                            </div>
                            <form className="mt-10">
                                {/* Colors */}
                                <div>
                                    <h3 className="text-sm font-medium text-gray-900">Color</h3>

                                    <fieldset aria-label="Choose a color" className="mt-4">
                                        <RadioGroup value={selectedColor} onChange={setSelectedColor} className="flex items-center space-x-3">
                                            {product.colors.map((color) => (
                                                <Radio
                                                    key={color.name}
                                                    value={color}
                                                    aria-label={color.name}
                                                    className={classNames(
                                                        color.selectedClass,
                                                        'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none data-[checked]:ring-2 data-[focus]:data-[checked]:ring data-[focus]:data-[checked]:ring-offset-1',
                                                    )}
                                                >
                                                    <span
                                                        aria-hidden="true"
                                                        className={classNames(
                                                            color.class,
                                                            'h-8 w-8 rounded-full border border-black border-opacity-10',
                                                        )}
                                                    />
                                                </Radio>
                                            ))}
                                        </RadioGroup>
                                    </fieldset>
                                </div>

                                {/* Sizes */}
                                <div className="mt-10">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-medium text-gray-900">Size</h3>

                                    </div>

                                    <fieldset aria-label="Choose a size" className="mt-4">
                                        <RadioGroup
                                            value={selectedSize}
                                            onChange={setSelectedSize}
                                            className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-10"
                                        >
                                            {product.sizes.map((size) => (
                                                <Radio
                                                    key={size.name}
                                                    value={size}
                                                    disabled={!size.inStock}
                                                    className={classNames(
                                                        size.name === selectedSize.name
                                                            ? 'cursor-pointer bg-indigo-100 text-indigo-900 border-indigo-500 shadow-md'
                                                            : size.inStock
                                                                ? 'cursor-pointer bg-white text-gray-900 border-gray-300'
                                                                : 'cursor-not-allowed bg-gray-50 text-gray-200 border-gray-200',
                                                        'group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none',
                                                    )}
                                                >
                                                    <span>{size.name}</span>
                                                    {size.inStock ? (
                                                        <span
                                                            aria-hidden="true"
                                                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-500"
                                                        />
                                                    ) : (
                                                        <span
                                                            aria-hidden="true"
                                                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                                        >
                                                            <svg
                                                                stroke="currentColor"
                                                                viewBox="0 0 100 100"
                                                                preserveAspectRatio="none"
                                                                className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                                            >
                                                                <line x1={0} x2={100} y1={100} y2={0} vectorEffect="non-scaling-stroke" />
                                                            </svg>
                                                        </span>
                                                    )}
                                                </Radio>
                                            ))}
                                        </RadioGroup>
                                    </fieldset>
                                </div>

                                <Button onClick={handleAddToCart} color='primary' variant='contained' sx={{ px: '2rem', py: '1rem', mt: '10px', bgcolor: '' }}>
                                    Add to Cart
                                </Button>
                            </form>
                        </div>

                        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                            {/* Description and details */}
                            <div>
                                <h3 className="sr-only">Description</h3>

                                <div className="space-y-6">
                                    <p className="text-base text-gray-900">{productReducer.product?.description}</p>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                                <div className="mt-4">
                                    <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                        {product.highlights.map((highlight) => (
                                            <li key={highlight} className="text-gray-400">
                                                <span className="text-gray-600">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                                <div className="mt-4 space-y-6">
                                    <p className="text-sm text-gray-600">{product.details}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ratings and reviews */}
                <section className='font-semibold text-lg pb-4 mx-10'>
                    <h1 className='py-2'>Recent Ratings and Reviews</h1>
                    <div className='border p-5'>
                        <Grid container spacing={7}>
                            <Grid item xs={6}>
                                <div className='space-y-5'>
                                    {[1, 1, 1, 1].map((item, index) => <ProductReviewCard key={index} />)}
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                                <h1 className='text-xl font-semibold pb-1'>Product Ratings</h1>
                                <div className='flex items-center space-x-3'>
                                    <Rating name="half-rating-read" size='small' defaultValue={2.5} precision={0.5} readOnly />
                                    <p className='opacity-50 text-sm'>1452 Ratings</p>
                                </div>
                                <Box className='mt-5 space-y-3'>
                                    <Grid container alignItems='center' gap={2} >
                                        <Grid item xs={2}>
                                            <p>Excellent</p>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <LinearProgress sx={{
                                                borderRadius: 4,
                                                height: 7,
                                                bgcolor: '#d0d0d0',
                                                '& .MuiLinearProgress-bar': {
                                                    backgroundColor: '#91ff35'
                                                }
                                            }} variant="determinate" color='secondary' value={79} />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <p className='opacity-50'>1452 Ratings</p>
                                        </Grid>
                                    </Grid>
                                    <Grid container alignItems='center' gap={2} >
                                        <Grid item xs={2}>
                                            <p>Very Good</p>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <LinearProgress sx={{
                                                borderRadius: 4,
                                                height: 7,
                                                bgcolor: '#d0d0d0',
                                                '& .MuiLinearProgress-bar': {
                                                    backgroundColor: '#ffee33'
                                                }
                                            }} variant="determinate" color='secondary' value={59} />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <p className='opacity-50'>1452 Ratings</p>
                                        </Grid>
                                    </Grid>
                                    <Grid container alignItems='center' gap={2} >
                                        <Grid item xs={2}>
                                            <p>Good</p>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <LinearProgress sx={{
                                                borderRadius: 4,
                                                height: 7,
                                                bgcolor: '#d0d0d0',
                                                '& .MuiLinearProgress-bar': {
                                                    backgroundColor: '#d1ff33'
                                                }
                                            }} variant="determinate" color='secondary' value={29} />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <p className='opacity-50'>1452 Ratings</p>
                                        </Grid>
                                    </Grid>
                                    <Grid container alignItems='center' gap={2} >
                                        <Grid item xs={2}>
                                            <p>Average</p>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <LinearProgress sx={{ borderRadius: 4, height: 7, bgcolor: '#d0d0d0' }} variant="determinate" color='warning' value={20} />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <p className='opacity-50'>1452 Ratings</p>
                                        </Grid>
                                    </Grid>
                                    <Grid container alignItems='center' gap={2} >
                                        <Grid item xs={2}>
                                            <p>Poor</p>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <LinearProgress sx={{ borderRadius: 4, height: 7, bgcolor: '#d0d0d0' }} variant="determinate" color='error' value={10} />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <p className='opacity-50'>1452 Ratings</p>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
                    </div>
                </section>

                {/* Similer products */}
                <section className='font-semibold text-lg pb-4 mx-10 mt-10'>
                    <h1 className='py-5 text-xl font-bold'>Similer products</h1>
                    <div className='flex flex-wrap space-y-5'>
                        {
                            products.map((item, index) => <HomeSectionCard key={index} product={item} />)
                        }

                    </div>
                </section>
            </div>
        </div>
    )
}
