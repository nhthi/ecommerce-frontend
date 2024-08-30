import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/components/pages/HomePage/HomePage'
import Cart from '../customer/components/Cart/Cart'
import Product from '../customer/components/Product/Product'
import ProductDetail from '../customer/components/ProductDetail/ProductDetail'
import Footer from '../customer/components/HomeCarousel/Footer'
import Checkout from '../customer/components/Checkout/Checkout'
import Order from '../customer/components/Order/Order'
import OrderDetails from '../customer/components/Order/OrderDetails'
import PaymentSuccess from '../customer/components/Payment/PaymentSuccess'
import NotFound from '../customer/components/NotFound.jsx/NotFound'
import Account from '../admin/component/Account'


const CustomerRouters = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/account' element={<Account />} />
                <Route path='/account/:r' element={<HomePage />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/:labelOne/:labelTwo/:labelThree' element={<Product />} />
                <Route path='/product/:productId' element={<ProductDetail />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/account/order' element={<Order />} />
                <Route path='/account/order/:orderId' element={<OrderDetails />} />
                <Route path='/payment/:orderId' element={<PaymentSuccess />} />
                <Route path='/*' element={<NotFound />} />
            </Routes>
            <div>
                <Footer />
            </div>

        </div>
    )
}

export default CustomerRouters
