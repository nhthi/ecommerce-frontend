import React, { useEffect } from 'react'
import CartItem from './CartItem'
import { Button, Divider } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUserCart } from '../../../state/Cart/action'

const Cart = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const cart = useSelector(store=>store.cart)


    const handleCheckout = () => {
        navigate('/checkout?step=2')
    }

    useEffect(()=>{
        dispatch(getUserCart())
    },[cart.cartItems.length])
    return (
        <div className='my-10'>
            <div>
                <div className='lg:grid grid-cols-3 lg:px-16 relative'>
                    <div className='col-span-2'>
                        {cart.cartItems.map((item, index) => <CartItem item={item} key={index} />)}
                    </div>
                    <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                        <div className='border '>
                            <p className='uppercase font-bold opacity-60 py-4 mx-5'>
                                Price details
                            </p>
                            <Divider />
                            <div className='space-y-3 mx-5 mb-4'>
                                <div className='flex justify-between pt-4'>
                                    <span className='text-sm text-black font-bold'>
                                        Price {cart.cartItems.length > 0 ? `(${cart.cartItems.length} Item)`:''}
                                    </span>
                                    <span className='text-sm text-green-600 font-bold'>
                                        {cart.cart?.totalPrice}$
                                    </span>
                                </div>
                                <div className='flex justify-between'>
                                    <span className='text-sm text-black font-bold'>
                                        Discount
                                    </span>
                                    <span className='text-sm text-green-600 font-bold'>
                                        -{0}$
                                    </span>
                                </div>
                                <div className='flex justify-between'>
                                    <span className='text-sm text-black font-bold'>
                                        Delivery Charges
                                    </span>
                                    <span className='text-sm text-green-600 font-bold'>
                                        Free
                                    </span>
                                </div>
                                <Divider />
                                <div className='flex justify-between pb-4 text-green-600 text-xl font-bold'>
                                    <span className=''>
                                        Total Amount
                                    </span>
                                    <span className=''>
                                        {cart.cart?.totalPrice}$
                                    </span>
                                </div>
                                <Button
                                    onClick={handleCheckout}
                                    color='primary'
                                    fullWidth
                                    variant='contained'
                                    sx={{ py: '1rem', mt: '10px', bgcolor: '' }}>
                                    Check out
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
