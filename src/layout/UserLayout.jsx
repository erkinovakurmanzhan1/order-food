import React, { useCallback, useState } from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Basket from '../components/basket/Basket'
import Header from '../components/header/Header'

const UserLayout = () => {
  const [isBasketVisible, setBasketVisisble] = useState(false)
  const showBasketHandler = useCallback(() => {
    setBasketVisisble((prevState) => !prevState)
  }, [])

  return (
    <div>
      <Header onShowBasket={showBasketHandler} />
      {isBasketVisible && <Basket onClose={showBasketHandler} />}
      <Content>
        <Outlet />
      </Content>
    </div>
  )
}

export default UserLayout
const Content = styled.div`
  margin-top: 101px;
`
