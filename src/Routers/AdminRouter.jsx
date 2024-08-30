import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../admin/component/Admin'
import NotFound from '../customer/components/NotFound.jsx/NotFound'

const AdminRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Admin/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default AdminRouter
