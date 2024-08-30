import React, { useEffect } from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import OrderDetailsCard from './OrderDetailsCard'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderById } from '../../../state/order/action'
import { useParams } from 'react-router-dom'

const OrderDetails = () => {
    const dispatch = useDispatch()
    const order = useSelector(store=>store.order)
    const {orderId} = useParams()

    console.log(order);
    

    useEffect(()=>{
        dispatch(getOrderById(orderId))
    },[orderId])
    return (
        <div className='p-5 lg:p-20'>
            <div className='p-5 shadow-lg rounded-s-md border'>
                <h1 className='font-semibold text-xl pb-5'>Delivery Address</h1>
                <AddressCard address={order.order?.shippingAddress}/>
            </div>
            <div className=''>
                <OrderTracker />
            </div>
            <div className='space-y-5'>
                {[1,1,1,1,1].map(item => <OrderDetailsCard/>)}
            </div>
        </div>
    )
}

export default OrderDetails
