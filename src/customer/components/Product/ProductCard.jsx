import React from 'react'
import './ProductCard.css'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({product}) => {
  const navigate = useNavigate()
  return (
    <div onClick={()=>navigate(`/product/${product.id}`)} className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
      <div className='h-[20rem]'>
            <img
            src={product.imageUrl}
            alt=''
            className='w-full h-full object-cover'
            />
      </div>
      <div className='textPart bg-white p-3'>
        <div>
            <p className='font-bold opacity-60'>{product.brand}</p>
            <p className=''>{product.title}</p>
        </div>
        <div className='flex items-center space-x-2'>
            <p className='font-semibold'>{product.discountPrice}$</p>
            <p className='line-through opacity-50'>{product.price}$</p>
            <p className='font-semibold text-green-600'>{product.discountPercent}% off</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
