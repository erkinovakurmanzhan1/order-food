import { Grid } from '@mui/material'
import React from 'react'
import Header from '../../components/header/Header'
import OrderItem from './Order.item'

const UserOrdersPage = ({ onShowBasket }) => {
  const showBasketHandler = () => {
    return onShowBasket()
  }
  return (
    <Grid>
      <Header onShowBasket={showBasketHandler} />
      <OrderItem />
    </Grid>
  )
}

export default UserOrdersPage
