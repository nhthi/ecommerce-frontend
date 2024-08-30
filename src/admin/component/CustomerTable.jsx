import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProductById, findProducts } from '../../state/product/action'
import { Box, Button, Card, CardHeader, Chip, IconButton, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { getAllUser } from '../../state/admin/user/action';



const CustomerTable = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const adminUser = useSelector(store => store.adminUser)

  const [pageNumber, setPageNumber] = useState(0)
  const handlePaginationChange = (e, value) => {
    setPageNumber(value - 1)
  }

  useEffect(() => {
    dispatch(getAllUser())
  }, [])


  return (
    <Card className='' >
      <CardHeader
        title="All Customer"
        sx={{ bgcolor: '#2B2B52', color: 'white' }}
        className='rounded-tl-md rounded-tr-md'
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Id</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Mobile</TableCell>
              <TableCell align="left">Role</TableCell>
              <TableCell align="left">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {adminUser.users?.map(item => 
              <TableRow
                key={item.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >

                <TableCell align="left">
                  {item?.id}
                </TableCell>
                <TableCell>{item.firstName}</TableCell>
                <TableCell align="left">{item.email}</TableCell>
                <TableCell align="left">
                  {item.mobile} 
                </TableCell>
                <TableCell align="left">
                  {item?.role || 'Customer'}
                </TableCell>
                <TableCell align="left">
                  <IconButton>
                    <DeleteIcon sx={{ color: 'red' }} />
                  </IconButton>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <div className='flex justify-center items-center p-4'>
        <Pagination count={5} color="primary" onChange={handlePaginationChange} />
      </div>
    </Card>
  )
}

export default CustomerTable
