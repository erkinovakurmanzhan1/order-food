import { Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminHeader from '../components/header/admin-header/AdminHeader'

const AdminLayout = () => {
  return (
    <div>
      <AdminHeader />
      <Box>
        <Outlet />
      </Box>
    </div>
  )
}

export default AdminLayout

const Box = styled(Grid)`
  background-color: #fff;
`
