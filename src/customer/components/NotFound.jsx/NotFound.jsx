import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div className='p-40 flex items-center justify-center'>
            <div className='flex items-center flex-col justify-center'>
                <p className='font-semibold -mb-8'>OOPS! PAGE NOT FOUND</p>
                <p className='font-extrabold text-[15rem] leading-none'>404</p>
                <p className='mt-2 font-extrabold text-2xl'>WE ARE SORRY, BUT THE PAGE YOU REQUEST WAS NOT FOUND</p>
                <Button 
                onClick={()=>navigate("/")}
                sx={{
                    marginTop:2,
                    color: 'white',
                    backgroundColor: 'black',
                    '&:hover': {
                        backgroundColor: '#333333',
                    },
                }}>
                    Home
                </Button>
            </div>
        </div>
    )
}

export default NotFound
