import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AdminLayout from '../layout/AdminLayout'
import UserLayout from '../layout/UserLayout'
import Meals from '../pages/admin/Meals.page'
import Orders from '../pages/admin/Orders.page'
import MealsPage from '../pages/user/MealsPage'
import SignIn from '../pages/user/SignIn'
import SignUp from '../pages/user/SignUp'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<MealsPage />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="meals" element={<Meals />} />
        <Route path="orders" element={<Orders />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
