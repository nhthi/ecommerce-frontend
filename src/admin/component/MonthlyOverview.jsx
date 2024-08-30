import { AccountCircleOutlined, AttachMoney, MoreVert, SettingsCell, TrendingUp } from '@mui/icons-material'
import { Avatar, Box, Button, Card, CardContent, CardHeader, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'


const salesData = [
    {
        status: '245K',
        title: 'Sales',
        color: '#FF4848',
        icon: <TrendingUp sx={{ fontSize: '1.75rem' }} />
    },
    {
        status: '2.5K',
        title: 'Customers',
        color: '#45CE30',
        icon: <AccountCircleOutlined sx={{ fontSize: '1.75rem' }} />
    },
    {
        status: '31K',
        title: 'Products',
        color: '#FAD02E',
        icon: <SettingsCell sx={{ fontSize: '1.75rem' }} />
    },
    {
        status: '245K',
        title: 'Reveneu',
        color: '#25CCF7',
        icon: <AttachMoney sx={{ fontSize: '1.75rem' }} />
    }
]

const renderStatus = () => {
    return salesData.map(item =>
        <Grid key={item.title} item xs={12} md={3} >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar variant='rounded' sx={{
                    mr: 3,
                    width: 44,
                    height: 44,
                    boxShadow: 3,
                    color: 'white',
                    bgcolor: `${item.color}`
                }}>
                    {item.icon}
                </Avatar>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant='caption'>{item.title}</Typography>
                    <Typography variant='h6'>{item.status}</Typography>

                </Box>
            </Box>
        </Grid>)
}


const MonthlyOverview = () => {
    return (
        <Card sx={{ position: 'relative', bgcolor: '#2B2B52', color: 'white' , height:210}}>
            <CardHeader
                title="Mothly Overview"
                action={
                    <IconButton size='small'>
                        <MoreVert sx={{ color: 'white' }} />
                    </IconButton>
                }
                subheader={
                    <Typography variant='body2'>
                        <Box component={'span'} sx={{ fontWeight: 600, color: 'white' }}>
                            Total 45.6% growth😁
                        </Box>
                        this month
                    </Typography>
                }
                titleTypographyProps={{
                    sx: {
                        mb: 2.5,
                        lineHeight: '2rem !important',
                        letterSpacing: '.15px !important'
                    }
                }}
            />
            <CardContent sx={{ pt: theme => `${theme.spacing(3)} !important` }}>
                <Grid container spacing={[5, 0]}>
                    {renderStatus()}
                </Grid>


            </CardContent>
        </Card>
    )
}

export default MonthlyOverview
