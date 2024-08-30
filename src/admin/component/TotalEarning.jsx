import { MoreVert } from '@mui/icons-material'
import { Button, Card, CardContent, CardHeader, Grid, IconButton } from '@mui/material'
import React from 'react'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import TopEarningProduct from './TopEarningProduct';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ReplayCircleFilledIcon from '@mui/icons-material/ReplayCircleFilled';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import QueryStatsIcon from '@mui/icons-material/QueryStats';




const TotalEarning = () => {
    return (
        <Card className="" sx={{ bgcolor: "#F5BCBA" }}>
            <CardHeader
                sx={{ bgcolor: '#e91e63', color: 'white' }}
                className='rounded-tl-md rounded-tr-md'

                title="Weekly Overview"
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                }
            />
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <div className='mb-5'>
                            <div className='flex items-center'>
                                <h1 className='p-5 font-bold text-4xl'>$ 24,245</h1>
                                {true ? <div className='text-green-500 font-semibold text-xl'>
                                    <ArrowDropUpIcon />
                                    <span>10%</span>
                                </div> :
                                    <div className='text-red-500 font-semibold text-xl'>
                                        <ArrowDropDownIcon />
                                        <span>10%</span>
                                    </div>}
                            </div>

                            <p className='px-5'>Compared to $12,123 last year</p>
                        </div>
                        <Card className='p-2 space-y-5'>
                            <TopEarningProduct />
                            <TopEarningProduct />
                            <TopEarningProduct />
                            <TopEarningProduct />
                        </Card>
                    </Grid>
                    <Grid item container xs={12} md={6} spacing={2} sx={{marginTop:0}}>
                        <Grid item xs={12} md={6}>
                            <Card sx={{height:250}}>
                                <CardHeader
                                    sx={{ bgcolor: '#e91e63', color: 'white' }}
                                    

                                    title={<MonetizationOnIcon sx={{fontSize:'2.5rem',color:'#7CEC9F'}}/>}
                                    action={
                                        <IconButton aria-label="settings">
                                            <MoreVert />
                                        </IconButton>
                                    }
                                />
                                <CardContent>
                                    <p className='font-semibold'>Total Profit</p>
                                    <div className='flex py-5 items-center'>
                                        <span className='text-xl font-bold'>$56,786</span>
                                        <span className='text-sm mx-5 text-green-500'>+23%</span>
                                    </div>

                                    <p className='text-sm text-gray-300'>Weekly Profit</p>

                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Card sx={{height:250}}>
                                <CardHeader
                                    sx={{ bgcolor: '#e91e63', color: 'white' }}
                                    

                                    title={<LocalMallIcon sx={{fontSize:'2.5rem',color:'#F0DF87'}}/>}
                                    action={
                                        <IconButton aria-label="settings">
                                            <MoreVert />
                                        </IconButton>
                                    }
                                />
                                <CardContent>
                                    <p className='font-semibold'>New Orders</p>
                                    <div className='flex py-5 items-center'>
                                        <span className='text-xl font-bold'>$56,786</span>
                                        <span className='text-sm mx-5 text-green-500'>+23%</span>
                                    </div>

                                    <p className='text-sm text-gray-300'>Weekly Profit</p>

                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Card sx={{height:250}}>
                                <CardHeader
                                    sx={{ bgcolor: '#e91e63', color: 'white' }}
                                    

                                    title={<ReplayCircleFilledIcon sx={{fontSize:'2.5rem',color:'#25CCF7'}}/>}
                                    action={
                                        <IconButton aria-label="settings">
                                            <MoreVert />
                                        </IconButton>
                                    }
                                />
                                <CardContent>
                                    <p className='font-semibold'>Refunds</p>
                                    <div className='flex py-5 items-center'>
                                        <span className='text-xl font-bold'>$56,786</span>
                                        <span className='text-sm mx-5 text-green-500'>+23%</span>
                                    </div>

                                    <p className='text-sm text-gray-300'>Past Month</p>

                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Card sx={{height:250}}>
                                <CardHeader
                                    sx={{ bgcolor: '#e91e63', color: 'white' }}
                                    

                                    title={<QueryStatsIcon sx={{fontSize:'2.5rem',color:'#badc57'}}/>}
                                    action={
                                        <IconButton aria-label="settings">
                                            <MoreVert />
                                        </IconButton>
                                    }
                                />
                                <CardContent>
                                    <p className='font-semibold'>Sales Queries</p>
                                    <div className='flex py-5 items-center'>
                                        <span className='text-xl font-bold'>$56,786</span>
                                        <span className='text-sm mx-5 text-green-500'>+23%</span>
                                    </div>

                                    <p className='text-sm text-gray-300'>Weekly Profit</p>

                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default TotalEarning
