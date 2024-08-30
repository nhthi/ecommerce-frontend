import { Avatar, AvatarGroup, Box, Button, Card, CardHeader, Chip, IconButton, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cancelOrder, confirmOrder, deleteOrder, deliveryOrder, getOrders, placeOrder, shipOrder } from '../../state/admin/order/action'
import DeleteIcon from '@mui/icons-material/Delete';


const orderStatus = [
    // {
    //     label: "Pending", value: "Pending".toUpperCase()
    // },
    {
        label: "Confirmed", value: "Confirmed".toUpperCase()
    },
    {
        label: "Placed", value: "Placed".toUpperCase()
    },
    {
        label: "Shipped", value: "Shipped".toUpperCase()
    },
    {
        label: "Delivered", value: "Delivered".toUpperCase()
    },
    {
        label: "Cancelled", value: "Cancelled".toUpperCase()
    },
]

const OrderTable = () => {

    const dispatch = useDispatch()
    const adminOrder = useSelector(store => store.adminOrder)
    const [selectedOrderId, setSelectedOrderId] = useState(null)

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event, id) => {
        setSelectedOrderId(id)
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        setSelectedOrderId(null)
    };

    const handleUpdateOrderStatus = (status) => {
        console.log({
            orderId: selectedOrderId,
            orderStatus: status
        });
        switch (status) {
            case 'CONFIRMED':
                dispatch(confirmOrder(selectedOrderId))
                break;
            case 'PLACED':
                dispatch(placeOrder(selectedOrderId))
                break;
            case 'SHIPPED':
                dispatch(shipOrder(selectedOrderId))
                break;
            case 'DELIVERED':
                dispatch(deliveryOrder(selectedOrderId))
                break;
            case 'CANCELLED':
                dispatch(cancelOrder(selectedOrderId))
                break;
            default:
                break;
        }
        // dispatch(updateOrderStatus({
        //     orderId: selectedOrderId,
        //     orderStatus: status
        // }))
        handleClose()
    }

    const handleDeleteOrder = (id) => {
        dispatch(deleteOrder(id))
    }

    useEffect(() => {
        dispatch(getOrders())
    }, [adminOrder.updateOrder, adminOrder.deleteOrderId])
    return (
        <Box className=''>
            <Card>
                <CardHeader
                    sx={{ bgcolor: '#2B2B52', color: 'white' }}
                    className='rounded-tl-md rounded-tr-md'
                    title="All Orders"
                />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell align="left">Image</TableCell>
                                <TableCell align="left">Customer</TableCell>
                                <TableCell align="left">Price</TableCell>
                                <TableCell align="left">Name</TableCell>
                                <TableCell align="left">Status</TableCell>
                                <TableCell align="left">Update</TableCell>
                                <TableCell align="left">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {adminOrder.orders.map((item) => (
                                <TableRow
                                    key={item.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row" >
                                        {item.id}
                                    </TableCell>
                                    <TableCell align="left">
                                        <AvatarGroup max={3} sx={{ justifyContent: 'start' }}>
                                            {item?.orderItems?.map(order =>
                                                <Avatar key={order.id} src={order.product.imageUrl} />
                                            )}

                                        </AvatarGroup>
                                    </TableCell>
                                    <TableCell align="left">{item.user.email}</TableCell>
                                    <TableCell align="left">{`$ ${item.totalPrice}`}</TableCell>
                                    <TableCell align="left">{item.orderItems.map(
                                        orderItem => <p>{orderItem.product.title} - {orderItem.product.brand} x {orderItem.quantity}</p>
                                    )}
                                    </TableCell>
                                    <TableCell align="left">
                                        <Button
                                            sx={{
                                                marginLeft:-2,
                                                bgcolor:
                                                    `${item.orderStatus === 'CONFIRMED' ? '#3498DB'
                                                        : item.orderStatus === 'SHIPPED' ? '#F3B63A'
                                                            : item.orderStatus === 'DELIVERED' ? '#45CE30'
                                                                : item.orderStatus === 'CANCELLED' ? '#FF3E4D'
                                                                    : item.orderStatus === 'PLACED' ? '#8B78E6'
                                                                        : 'primary'
                                                    }`,
                                                borderRadius:9999,
                                                fontWeight: 600,
                                                '&:hover': {
                                                    bgcolor: `${item.orderStatus === 'CONFIRMED' ? '#3498DB'
                                                        : item.orderStatus === 'SHIPPED' ? '#F3B63A'
                                                            : item.orderStatus === 'DELIVERED' ? '#45CE30'
                                                                : item.orderStatus === 'CANCELLED' ? '#FF3E4D'
                                                                    : item.orderStatus === 'PLACED' ? '#8B78E6'
                                                                        : 'primary'
                                                        }`,
                                                }
                                            }
                                            }
                                            variant='contained'
                                        >
                                            {item.orderStatus}
                                        </Button>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Button
                                            id={`basic-button-${item.id}`}
                                            aria-controls={open ? `basic-menu-${item.id}` : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? 'true' : undefined}
                                            onClick={(event) => handleClick(event, item.id)}
                                        >
                                            Status
                                        </Button>
                                        <Menu
                                            id={`basic-menu-${item.id}`}
                                            anchorEl={anchorEl}
                                            open={open && selectedOrderId === item.id}
                                            onClose={handleClose}
                                            MenuListProps={{
                                                'aria-labelledby': `basic-button-${item.id}`,
                                            }}
                                        >
                                            {orderStatus.map((status) => (
                                                <MenuItem key={status.value} onClick={() => handleUpdateOrderStatus(status.value)}>
                                                    {status.label}
                                                </MenuItem>
                                            ))}
                                        </Menu>
                                    </TableCell>
                                    <TableCell align="left">
                                        <IconButton onClick={() => handleDeleteOrder(item.id)}>
                                            <DeleteIcon sx={{ color: 'red' }} />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        </Box>
    )
}

export default OrderTable
