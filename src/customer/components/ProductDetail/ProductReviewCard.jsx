import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

const ProductReviewCard = () => {
    return (
        <div>
            <Grid container spacing={2} gap={3}>
                <Grid item xs={1}>
                    <Box>
                        <Avatar sx={{ width: 56, height: 56, bgcolor: '9155fd' }} />
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <div className='space-y-2'>
                        <div >
                            <p className='font-semibold text-sm'>Thinh Nguyen</p>
                            <p className='opacity-50 text-sm'>25/7/2024</p>
                        </div>
                    </div>
                    <Rating name="half-rating-read" size='small' defaultValue={2.5} precision={0.5} readOnly />
                    <p className='text-sm'>
                        Đồ siêu tốt, siêu thích, mặc vào chỉ có thức chứ không ngủ được 
                    </p>
                </Grid>
            </Grid>
        </div>
    )
}

export default ProductReviewCard
