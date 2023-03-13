/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getMyOrder } from '../../store/order/order.thunks'

const OrderItem = () => {
  const dispatch = useDispatch()
  const { order } = useSelector((state) => state.orders)
  useEffect(() => {
    dispatch(getMyOrder())
  }, [dispatch])
  return (
    <Container>
      <BoxUl>
        {order.map((item) => {
          return (
            <MainBox>
              <TotalPriceTitle key={item._id}>
                totalPrice:{item.totalPrice}
              </TotalPriceTitle>
              {item.items.map((meal) => (
                <MealsContainer>
                  <li>{meal.title}</li>
                  <li>${meal.price}</li>
                  <li>x{meal.amount}</li>
                </MealsContainer>
              ))}
            </MainBox>
          )
        })}
      </BoxUl>
    </Container>
  )
}

export default OrderItem

const MainBox = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #7f8992;
  border: 1px solid black;
  margin-top: 1rem;
  border-radius: 10px;
  padding: 10px;
`
const Container = styled.div`
  padding-top: 7rem;
  width: 100%;
  background-color: #ffff;
`
const BoxUl = styled.ul`
  list-style: none;
`
const MealsContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 1rem;
  width: 40%;
  padding: 0;
`
const TotalPriceTitle = styled.li`
  width: 20%;
  text-align: start;
  padding-left: 1rem;
`
