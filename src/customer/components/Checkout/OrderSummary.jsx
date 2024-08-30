import React, { useEffect } from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { Button, Divider } from '@mui/material'
import CartItem from '../Cart/CartItem'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderById } from '../../../state/order/action'

const OrderSummary = () => {
    const dispatch = useDispatch()
    const cart = useSelector(store => store.cart)
    const order = useSelector(store => store.order)
    const location= useLocation()
    const searchParams = new URLSearchParams(location.search)
    const orderId = searchParams.get('order_id')

    useEffect(()=>{
        dispatch(getOrderById(orderId))
    },[orderId])
    return (
        <div>
            <div className='p-5 shadow-lg rounded-s-md border'>
                <AddressCard address={order.order?.shippingAddress}/>
            </div>
            <div>
                <div className='my-10'>
                    <div>
                        <div className='lg:grid grid-cols-3  relative'>
                            <div className='col-span-2 space-y-5'>
                                {cart.cartItems.map((item, index) => <CartItem key={index} item={item} />)}
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
                                                Price {cart.cartItems.length > 0 ? `(${cart.cartItems.length} Item)` : ''}
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
                                            color='primary'
                                            fullWidth
                                            variant='contained'
                                            sx={{ py: '1rem', mt: '10px', bgcolor: '' }}
                                        >
                                            Check out
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary
