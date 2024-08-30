import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';





const OrderCard = () => {
    const navigate = useNavigate()
    return (
        <div onClick={()=>navigate(`/account/order/5`)} className='border p-5 shadow-lg hover:shadow-2xl'>
            <Grid container spacing={2} alignItems={'center'}>
                <Grid item xs={6}>
                    <div className='flex cursor-pointer items-center'>
                        <img
                            src={'https://www.chapi.vn/img/product/2017/10/14/ao-khoac-trung-nien-nam-dng-15-new.jpg'}
                            alt=''
                            className='h-[5rem] w-[5rem] object-cover'
                        />
                        <div className='ml-2 space-y-2'>
                            <p className='font-semibold'>Ao khoac nam sieu dep</p>
                            <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                            <p className='opacity-50 text-xs font-semibold'>Color: Black</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <p className='font-semibold'>199$</p>
                </Grid>
                <Grid item xs={4}>
                    {
                        true ?
                            <p className=''>
                                <AdjustIcon sx={{ width: 15, height: 15 }} className='text-green-600 translate-y-[-10%] mr-2' />
                                <span>
                                    Expected Delivery On March 03
                                </span>
                                <p className='text-sm'>Your item has been delivered</p>
                            </p>
                            :
                            <p className='flex items-center gap-1'>
                                <span>
                                    Delivered On March 03
                                </span>
                            </p>
                    }
                </Grid>
            </Grid>
        </div>
    )
}

export default OrderCard
