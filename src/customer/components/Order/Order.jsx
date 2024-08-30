import { Grid } from '@mui/material'
import React from 'react'
import OrderCard from './OrderCard'

const orderStatus = [
    { label: 'On The Way', value: 'on_the_way' },
    { label: 'Delivered', value: 'delivered' },
    { label: 'Cancelled', value: 'cancelled' },
    { label: 'Returned', value: 'returned' },

]



const Order = () => {
    return (
        <div className='p-5 lg:p-20'>
            <Grid container justifyContent={'space-between'}>
                <Grid item xs={2.5}>
                    <div className='h-auto shadow-lg bg-white p-5 sticky top-5'>
                        <h1 className='font-bold text-lg'>Filter</h1>
                        <div className='space-y-4  mt-6'>
                            <h1 className='font-semibold uppercase py-2'>
                                Order Status
                            </h1>
                            {
                                orderStatus.map(option => <div key={option.value} className='flex items-center'>
                                    <input
                                        defaultValue={option.value}
                                        type='checkbox'
                                        className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
                                    />
                                    <label className='ml-3 text-sm text-gray-600'>{option.label}</label>
                                </div>)
                            }
                        </div>
                    </div>
                </Grid>
                <Grid item xs={9} className='space-y-5'>
                    {[1, 1, 1, 1, 1, 1, 1].map(item =>
                        <OrderCard />
                    )}
                </Grid>
            </Grid>
        </div>
    )
}

export default Order
