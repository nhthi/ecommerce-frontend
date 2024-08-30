import { MoreVert } from '@mui/icons-material';
import { Box, Button, Card, CardContent, CardHeader, Grid, IconButton, Typography } from '@mui/material';
import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Monday',
    uv: 4000,
    revenue: 240,
    amt: 2400,
  },
  {
    name: 'Tuesday',
    uv: 3000,
    revenue: 1398,
    amt: 2210,
  },
  {
    name: 'Wednesday',
    uv: 2000,
    revenue: 980,
    amt: 2290,
  },
  {
    name: 'Thursday',
    uv: 2780,
    revenue: 390,
    amt: 2000,
  },
  {
    name: 'Friday',
    uv: 1890,
    revenue: 480,
    amt: 2181,
  },
  {
    name: 'Saturday',
    uv: 2390,
    revenue: 380,
    amt: 2500,
  },
  {
    name: 'Sunday',
    uv: 3490,
    revenue: 430,
    amt: 2100,
  },
];

export default class WeeklyView extends PureComponent {
  render() {
    return (
      <Card className="w-full h-full"sx={{bgcolor:"#F5BCBA"}}>
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
        <CardContent className="h-96 flex justify-center flex-col item mt-20">
          <ResponsiveContainer width='100%' height='100%'>
            <BarChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 0,
                bottom: 5,
              }}
              barSize={20}
            >
              <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
              <YAxis />
              <Tooltip />
              <Legend />
              <CartesianGrid strokeDasharray="3 3" />
              <Bar dataKey="revenue" fill="#BB2CD9" background={{ fill: '#74B9FF' }} />
            </BarChart>
          </ResponsiveContainer>
          <Button variant='contained'>Details</Button>
        </CardContent>
      </Card>

    );

  }
}
