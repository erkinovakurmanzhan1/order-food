import React from 'react'
import styled from 'styled-components'

const OrderList = ({ totalPrice }) => {
  return (
    <div>
      <List>{totalPrice}</List>
    </div>
  )
}

export default OrderList
const List = styled.li`
  margin-left: 2rem;
  list-style: none;
`
