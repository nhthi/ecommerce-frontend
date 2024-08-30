import { Card } from '@mui/material'
import React from 'react'

const TopEarningProduct = () => {
    return (
        <Card className='flex' sx={{bgcolor:'#5A20CB'}}>
            <img
                className='h-20 w-20 object-cover'
                src='https://media.dolenglish.vn/PUBLIC/MEDIA/72155ede-e977-4d07-be59-145f0610191a.jpg' alt='' />
            <div className='flex justify-between items-center flex-1 mx-8'>
                <div>
                    <h1 className='text-xl font-bold'>Men</h1>
                    <p>Clothing, Suit</p>
                </div>
                <div>
                    <p>$24,423</p>
                </div>
            </div>
        </Card>
    )
}

export default TopEarningProduct
