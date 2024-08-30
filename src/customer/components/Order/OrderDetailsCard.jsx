import { Grid } from '@mui/material'
import React from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';





const OrderDetailsCard = () => {
    return (
        <div className='border p-5 shadow-lg hover:shadow-2xl'>
            <Grid container spacing={2} alignItems={'center'} justifyContent={'space-between'}>
                <Grid item xs={6}>
                    <div className='flex cursor-pointer items-center'>
                        <img
                            src={'https://www.chapi.vn/img/product/2017/10/14/ao-khoac-trung-nien-nam-dng-15-new.jpg'}
                            alt=''
                            className='h-[6rem] w-[6rem] object-cover'
                        />
                        <div className='ml-4 space-y-2'>
                            <p className='font-semibold'>Ao khoac nam sieu dep</p>
                            <span className='opacity-50 text-xs font-semibold mr-3'>Size: M</span>
                            <span className='opacity-50 text-xs font-semibold'>Color: Black</span>
                            <p className='font-semibold'>Seller: VietCloth</p>
                            <p className='font-semibold'>199$</p>
                        </div>
                    </div>
                </Grid>
                <Grid item>
                    <div className='flex items-center gap-2 text-purple-500 cursor-pointer'>
                        <StarBorderIcon sx={{fontSize:'1.5rem'}} className='translate-y-[5%]'/>
                        <span>Rate & Review Product</span>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default OrderDetailsCard
