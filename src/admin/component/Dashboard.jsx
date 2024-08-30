import { Card, Grid } from '@mui/material'
import React from 'react'
import Achievement from './Achievement'
import MonthlyOverview from './MonthlyOverview'
import ProductTable from './ProductTable'
import OrderTable from './OrderTable'
import Chart from './Chart'
import WeeklyView from './WeeklyView'
import TotalEarning from './TotalEarning'


const Dashboard = () => {
  return (
    <div className=''>
      <Grid container spacing={2}>

        <Grid item xs={12} md={4}>
          <Achievement />
        </Grid>

        <Grid item xs={12} md={8} >
          <MonthlyOverview />
        </Grid>

        <Grid item xs={12} md={4} style={{ display: 'flex', alignItems: 'stretch' }}>
          <WeeklyView />
        </Grid>
        <Grid item xs={12} md={8} style={{ display: 'flex', alignItems: 'stretch' }}>
          <TotalEarning />
        </Grid>
      </Grid>
    </div>
  )
}

export default Dashboard
