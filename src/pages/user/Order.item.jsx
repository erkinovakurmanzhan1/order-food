import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getMyOrder } from '../../store/order/order.thunks'
import OrderList from './Order.list'

const OrderItem = () => {
  const dispatch = useDispatch()
  const { order } = useSelector((state) => state.orders)
  useEffect(() => {
    dispatch(getMyOrder())
  }, [dispatch])
  return (
    <Container>
      <h1>Total Price</h1>

      {order.map((item) => {
        // eslint-disable-next-line no-underscore-dangle
        return <OrderList key={item._id} totalPrice={item.totalPrice} />
      })}
    </Container>
  )
}

export default OrderItem
const Container = styled.div`
  padding-top: 7rem;
  width: 100%;
  background-color: #ffff;
`
