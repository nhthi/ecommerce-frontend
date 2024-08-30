import { useTheme } from '@emotion/react'
import { Box, CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Dashboard from './Dashboard';
import CreateProduct from './CreateProduct';
import ProductTable from './ProductTable';
import CustomerTable from './CustomerTable';
import Navigation from '../../customer/components/Navigation/Navigation';
import OrderTable from './OrderTable';
import Chart from './Chart';
import TotalEarning from './TotalEarning';
import Account from './Account';
import MonthlyOverview from './MonthlyOverview';
import { Category, Create, GridView, Group, MonetizationOn, Sell } from '@mui/icons-material';
import NotFound from '../../customer/components/NotFound.jsx/NotFound';


const menu = [
    { name: 'Dashboard', path: '/admin', icon: <DashboardIcon />, element: <Dashboard /> },
    { name: 'Products', path: '/admin/products', icon: <Category />, element: <ProductTable /> },
    { name: 'Customers', path: '/admin/customers', icon: <Group />, element: <CustomerTable /> },
    { name: 'Orders', path: '/admin/orders', icon: <Sell />, element: <Dashboard /> },
    { name: 'Add Products', path: '/admin/products/create', icon: <Create />, element: <CreateProduct /> },
    { name: 'Total Earnings', path: '/admin/total-earning', icon: <MonetizationOn />, element: <CreateProduct /> },
    { name: 'Monthly Overview', path: '/admin/monthly-overview', icon: <GridView />, element: <CreateProduct /> },
    { name: 'Weekly Overview', path: '/admin/weekly-overview', icon: <GridView />, element: <CreateProduct /> },

]

const Admin = () => {

    const theme = useTheme()
    const isLargeScreen = useMediaQuery("(min-width:1080px)")
    const [sideBarVisible, setSideBarVisible] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()

    const drawer = (
        <Box
            sx={{
                overflow: "auto",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
            }}>
            {/* {isLargeScreen && <Toolbar/>} */}
            <List>
                {menu.map(item =>
                    <ListItem disablePadding onClick={() => navigate(item.path)} sx={{ py: 1,bgcolor:`${location.pathname === item.path ?'#E3F2FD' : '' } ` }}>
                        <ListItemButton >
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText sx={{
                                '.MuiListItemText-primary': { // Chỉ định lớp chính xác
                                    fontWeight: 'bold',
                                }
                            }}>
                                {item.name}
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                )}
            </List>

            <List>
                <ListItem disablePadding onClick={() => navigate('/admin/account')}>
                    <ListItemButton>
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText>
                            Account
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>

    )



    return (
        <div className=''>
            <div className='flex h-[85vh]'>
                <CssBaseline />
                <div className='ml-2 sm:hidden lg:block fixed h-[85vh] lg:w-[15vw] flex items-center justify-center border-r border-gray-400'>
                    {drawer}
                </div>
                {/* <div className='h-[100vh] lg:w-[15%]'></div> */}
                <div className='lg:w-[85%] px-5 py-2 ml-[15vw]'>
                    <Routes >
                        <Route path={'/account'} element={<Account />} />
                        <Route path={''} element={<Dashboard />} />
                        <Route path={'/products'} element={<ProductTable />} />
                        <Route path={'/customers'} element={<CustomerTable/>} />
                        <Route path={'/products/create'} element={<CreateProduct />} />
                        <Route path={'/orders'} element={<OrderTable />} />
                        <Route path={'/weekly-overview'} element={<Chart />} />
                        <Route path={'/total-earning'} element={<TotalEarning />} />
                        <Route path={'/monthly-overview'} element={<MonthlyOverview />} />
                        <Route path={'/*'} element={<NotFound />} />

                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Admin
