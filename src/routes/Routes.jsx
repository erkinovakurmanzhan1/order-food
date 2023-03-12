import React from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import AdminLayout from '../layout/AdminLayout'
import UserLayout from '../layout/UserLayout'
import { UserRoles } from '../lib/constants/common'
import Meals from '../pages/admin/Meals.page'
import Orders from '../pages/admin/Orders.page'
import NotFoundPage from '../pages/guest/NotFoundPage'
import SignIn from '../pages/guest/SignIn'
import SignUp from '../pages/guest/SignUp'
import MealsPage from '../pages/user/MealsPage'
import UserOrdersPage from '../pages/user/UserOrdersPage'
import { ProtectectedRoute } from './ProtectedRoute'

const AppRoutes = () => {
  const role = useSelector((state) => state.auth.user.role)

  const isAllowed = (roles) => {
    return roles.includes(role)
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectectedRoute
            isAllowed={isAllowed([UserRoles.GUEST, UserRoles.USER])}
            fallBackPath="/admin/meals"
            component={UserLayout}
          />
        }
      >
        <Route
          index
          element={
            <ProtectectedRoute
              isAllowed={isAllowed([UserRoles.GUEST, UserRoles.USER])}
              fallBackPath="/admin/meals"
              component={MealsPage}
            />
          }
        />
        <Route
          path="signup"
          element={
            <ProtectectedRoute
              isAllowed={isAllowed([UserRoles.GUEST, UserRoles.USER])}
              fallBackPath={role === UserRoles.ADMIN ? '/admin/meals' : '/'}
              component={SignUp}
            />
          }
        />
        <Route
          path="signin"
          element={
            <ProtectectedRoute
              isAllowed={isAllowed([UserRoles.GUEST, UserRoles.USER])}
              fallBackPath={role === UserRoles.ADMIN ? '/admin/meals' : '/'}
              component={SignIn}
            />
          }
        />
      </Route>
      <Route
        path="/admin"
        element={
          <ProtectectedRoute
            isAllowed={isAllowed([UserRoles.ADMIN])}
            fallBackPath="/"
            component={AdminLayout}
          />
        }
      >
        <Route
          path="meals"
          element={
            <ProtectectedRoute
              isAllowed={isAllowed([UserRoles.ADMIN])}
              fallBackPath="/"
              component={Meals}
            />
          }
        />
        <Route
          path="orders"
          element={
            <ProtectectedRoute
              isAllowed={isAllowed([UserRoles.ADMIN])}
              fallBackPath="/"
              component={Orders}
            />
          }
        />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/userOrders" element={<UserOrdersPage />} />
    </Routes>
  )
}

export default AppRoutes
