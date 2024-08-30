import { Button, Card, CardContent, styled, Typography } from '@mui/material'
import React from 'react'



const TrignleImg = styled("img")({
    right:0,
    bottom:0,
    height:170,
    position:'absolute'
})

const TrophyImg=styled('img')({
    right:36,
    bottom:20,
    height:98,
    position:'absolute'
})


const Achievement = () => {

  return (
    <Card sx={{position:'relative',bgcolor:'#2B2B52',color:'white', height:'210px'}}>
      <CardContent className='space-y-2 ml-2'>
        <Typography variant='h6' sx={{letterSpacing:'.25px'}}>
            My E-commerce
        </Typography>
        <Typography variant='body2'>
            Congratulations 😚
        </Typography>
        <Typography variant='h5'>
            146.8K
        </Typography>
        <Button size='small' variant='contained'>
            View Sales
        </Button>
        <TrignleImg src=''>

        </TrignleImg>
        <TrophyImg src='https://www.freeiconspng.com/uploads/gold-trophy-transparent-1.png'/>

      </CardContent>
    </Card>
  )
}

export default Achievement
