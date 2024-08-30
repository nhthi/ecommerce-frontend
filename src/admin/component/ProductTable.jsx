import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProductById, findProducts } from '../../state/product/action'
import { Button, Card, CardHeader, IconButton, Pagination, Paper, Popover, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';



const ProductTable = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const product = useSelector(store => store.product)
  const [pageNumber, setPageNumber] = useState(0)



  const handlePaginationChange = (e, value) => {
    setPageNumber(value - 1)
  }

  const handleDeleteProduct = (id) => {
    dispatch(deleteProductById(id))
    
    handleClose()
  }
  const [anchorEl, setAnchorEl] = useState(null);
  const [popoverId, setPopoverId] = React.useState(null);
  const handleClick = (event,id) => {
    setPopoverId(id);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = popoverId ? `popover-${popoverId}` : undefined;

  useEffect(() => {
    // const [minPrice, maxPrice] = priceValue === null ? [0, 1000] : priceValue.split('-').map(Number)
    const data = {
      category: '',
      color: [],
      size: [],
      minPrice: 0,
      maxPrice: 10000000,
      minDiscount: 0,
      sort: 'price_low',
      pageNumber: pageNumber,
      pageSize: 10,
      stock: null
    }
    console.log("data", data);
    dispatch(findProducts(data))
  }, [product.deletedProductId, pageNumber])

  return (
    <Card className='' >
      <CardHeader
        title="All products"
        sx={{ bgcolor: '#2B2B52', color: 'white' }}
        className='rounded-tl-md rounded-tr-md'
        action={
          <IconButton aria-label="settings" onClick={() => navigate('/admin/products/create')}>
            <CreateIcon sx={{ color: 'white' }} />
          </IconButton>
        }
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Id</TableCell>
              <TableCell align="left">Image</TableCell>
              <TableCell align="left">Title</TableCell>
              <TableCell align="left">Category</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Quantity</TableCell>
              <TableCell align="left">Update</TableCell>
              <TableCell align="left">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {product.products?.content?.map((item) => (
              <TableRow
                key={item.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{item.id}</TableCell>
                <TableCell align="left">
                  <img
                    className='w-[3rem] h-[3rem] object-cover rounded-full'
                    src={item.imageUrl} alt='' />
                </TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell align="left">{item.category.name}</TableCell>
                <TableCell align="left">
                  {item.price} $
                </TableCell>
                <TableCell align="left">
                  {item.quantity}
                </TableCell>
                <TableCell align="left">
                  <Button >
                    {item.quantity > 0 ? 'In_Stoke' : 'Out_of_Stoke'}
                  </Button>
                </TableCell>
                <TableCell align="left">
                  <IconButton onClick={(e)=>handleClick(e,item.id)}>
                    <DeleteIcon sx={{ color: 'red' }} />
                  </IconButton>
                  <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'center',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}
                    sx={{
                      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)' // Điều chỉnh giá trị box-shadow ở đây
                    }}
                  >
                    <Typography sx={{ p: 2 }}>Are you sure you want to delete?</Typography>
                    <div className='flex justify-center mb-2 gap-2'>
                      <Button variant='contained' onClick={() => handleDeleteProduct(popoverId)}>Yes</Button>
                      <Button onClick={handleClose}>No</Button>
                    </div>
                  </Popover>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className='flex justify-center items-center p-4'>
        <Pagination count={product.products?.totalPages} color="primary" onChange={handlePaginationChange} />
      </div>
    </Card>
  )
}

export default ProductTable
