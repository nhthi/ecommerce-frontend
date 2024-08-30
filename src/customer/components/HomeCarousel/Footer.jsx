import { Button, Grid, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <Grid
                container
                sx={{ bgcolor: '#d3d3d3', color: '#333333'}}
                className='mt-5 text-center py-10'
            >
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={3}
                >
                    <Typography className='pb-5' variant='h6'>Company</Typography>
                    <div>
                        <Button sx={{ color: '#333333', fontSize: '0.75rem' }}>About</Button>
                    </div>
                    <div>
                        <Button sx={{ color: '#333333', fontSize: '0.75rem' }}>About</Button>
                    </div>
                    <div>
                        <Button sx={{ color: '#333333', fontSize: '0.75rem' }}>About</Button>
                    </div>
                    <div>
                        <Button sx={{ color: '#333333', fontSize: '0.75rem' }}>About</Button>
                    </div>
                    <div>
                        <Button sx={{ color: '#333333', fontSize: '0.75rem' }}>About</Button>
                    </div>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={3}
                >
                    <Typography className='pb-5' variant='h6'>Company</Typography>
                    <div>
                        <Button sx={{ color: '#333333', fontSize: '0.75rem' }}>About</Button>
                    </div>
                    <div>
                        <Button sx={{ color: '#333333', fontSize: '0.75rem' }}>About</Button>
                    </div>
                    <div>
                        <Button sx={{ color: '#333333', fontSize: '0.75rem' }}>About</Button>
                    </div>
                    <div>
                        <Button sx={{ color: '#333333', fontSize: '0.75rem' }}>About</Button>
                    </div>
                    <div>
                        <Button sx={{ color: '#333333', fontSize: '0.75rem' }}>About</Button>
                    </div>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={3}
                >
                    <Typography className='pb-5' variant='h6'>Company</Typography>
                    <div>
                        <Button sx={{ color: '#333333', fontSize: '0.75rem' }}>About</Button>
                    </div>
                    <div>
                        <Button sx={{ color: '#333333', fontSize: '0.75rem' }}>About</Button>
                    </div>
                    <div>
                        <Button sx={{ color: '#333333', fontSize: '0.75rem' }}>About</Button>
                    </div>
                    <div>
                        <Button sx={{ color: '#333333', fontSize: '0.75rem' }}>About</Button>
                    </div>
                    <div>
                        <Button sx={{ color: '#333333', fontSize: '0.75rem' }}>About</Button>
                    </div>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={3}
                >
                    <Typography className='pb-5' variant='h6'>Company</Typography>
                    <div>
                        <Button sx={{ color: '#333333', fontSize: '0.75rem' }}>About</Button>
                    </div>
                    <div>
                        <Button sx={{ color: '#333333', fontSize: '0.75rem' }}>About</Button>
                    </div>
                    <div>
                        <Button sx={{ color: '#333333', fontSize: '0.75rem' }}>About</Button>
                    </div>
                    <div>
                        <Button sx={{ color: '#333333', fontSize: '0.75rem' }}>About</Button>
                    </div>
                    <div>
                        <Button sx={{ color: '#333333', fontSize: '0.75rem' }}>About</Button>
                    </div>
                </Grid>
                <Grid className='pt-10' item xs={12}>
                    <Typography variant='body2' component='p' align='center'>
                        &copy; 2023 My Company. All rights reserved.
                    </Typography>
                    <Typography variant='body2' component='p' align='center'>
                        Make with love by me.
                    </Typography>
                    <Typography variant='body2' component='p' align='center'>
                        Thanks for choosing our brand.
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer
