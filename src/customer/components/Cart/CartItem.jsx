import React from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Button, IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import { removeCartItem, updateCartItem } from '../../../state/Cart/action';


const CartItem = ({item}) => {

    const dispatch = useDispatch()


    const handleUpdateCartItem = (value) => {
        if (item.quantity === 1 && value === -1) {
            handleRemoveItem()
        }
        dispatch(updateCartItem({
            cartItemId: item.id,
            quantity: item.quantity + value
        }))

    }

    const handleRemoveItem = ()=>{
        dispatch(removeCartItem(item.id))
    }
    return (
        <div className='p-5 shadow-lg border rounded-md'>
            <div className='flex items-center '>
                <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                    <img
                        src={item.product.imageUrl}
                        className='w-full h-full object-cover object-top '
                        alt=''
                    />
                </div>
                <div className='ml-5 space-y-1'>
                    <p className='font-semibold '>{item.product.title}</p>
                    <p className='opacity-70'>Size: {item.size}, {item.product.color}</p>
                    <p className='opacity-70'>Seller: {item.product.brand}</p>
                    <div className='flex items-center space-x-3'>
                        <p className='font-semibold'>{item.product.discountPrice}$</p>
                        <p className='opacity-50 line-through'>{item.product.price}$</p>
                        <p className='font-semibold text-green-600'>{item.product.discountPercent}% off</p>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <div className='lg:flex items-center lg:space-x-10 pt-4 '>
                <div className='flex space-x-2 items-center'>
                    <IconButton sx={{color:'#4F46E5'}} onClick={()=>handleUpdateCartItem(-1)} disabled={item.quantity===1}>
                        <RemoveCircleOutlineIcon/>
                    </IconButton>
                    <span className='py-1 px-7 border rounded-sm'>
                        {item.quantity}
                    </span>
                    <IconButton sx={{color:'#4F46E5'}} onClick={()=>handleUpdateCartItem(1)}>
                        <AddCircleOutlineIcon/>
                    </IconButton>
                </div>
                <Button onClick={handleRemoveItem}>
                    REMOVE
                </Button>
            </div>
        </div>
    )
}

export default CartItem
