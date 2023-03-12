import { AppBar } from '@mui/material'
import { styled } from '@mui/material/styles'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import styledComponent from 'styled-components'
import { signOut } from '../../store/auth/auth.thunks'
import { getBasket } from '../../store/basket/basket.thunks'
import { uiSLiceActions } from '../../store/ui/ui.slice'
import { withAuthModal } from '../hoc/withAuthModal'
import ButtonMui from '../ui/ButtonMui'
import BasketButton from './BasketButton'

function Header({ onShowBasket, showAuthModal }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isAuthorized = useSelector((state) => state.auth.isAuthorized)
  const { items } = useSelector((state) => state.basket)
  const themeMode = useSelector((state) => state.ui.themeMode)
  const [animationClass, setAnimationClass] = useState('')

  useEffect(() => {
    dispatch(getBasket())
  }, [dispatch])

  const calculateTotalAmount = () => {
    const sum = items.reduce((s, item) => s + item.amount, 0)
    return sum
  }

  useEffect(() => {
    setAnimationClass('bump')

    const id = setTimeout(() => {
      setAnimationClass('')
    }, 300)

    return () => {
      clearTimeout(id)
    }
  }, [items])

  const themeChangeHandler = () => {
    const theme = themeMode === 'light' ? 'dark' : 'light'
    dispatch(uiSLiceActions.changeTheme(theme))
  }

  const signInNavigateChangeHandler = () => {
    navigate('/signin')
  }
  const signOutNavigateHandler = () => {
    dispatch(signOut())
  }

  const showBasketHandler = () => {
    if (!isAuthorized) {
      return showAuthModal()
    }
    return onShowBasket()
  }
  return (
    <Container>
      <Link to="/">
        <Logo>ReactMeals</Logo>
      </Link>
      <BasketButton
        className={animationClass}
        onClick={showBasketHandler}
        count={calculateTotalAmount()}
      />
      <ThemeBtnStyled onClick={themeChangeHandler}>
        {themeMode === 'light' ? '🌙 ' : ' ☀️'}
      </ThemeBtnStyled>
      {isAuthorized && (
        <Link to="/userOrders">
          <h2>My Orders</h2>
        </Link>
      )}

      {isAuthorized ? (
        <SignInBtnStyled onClick={signOutNavigateHandler}>
          Sign Out
        </SignInBtnStyled>
      ) : (
        <SignInBtnStyled onClick={signInNavigateChangeHandler}>
          Sign In
        </SignInBtnStyled>
      )}
    </Container>
  )
}

export default withAuthModal(Header)

const ThemeBtnStyled = styled(ButtonMui)(({ theme }) => ({
  '&': {
    background: theme.palette.primary.dark,
    width: '100px',
    height: '50px',
    border: 'none',
  },
}))

const Container = styled(AppBar)(({ theme }) => ({
  '&': {
    background: theme.palette.primary.dark,
    width: '100%',
    height: ' 101px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '120px',
    paddingRight: '120px',
  },
}))

const Logo = styledComponent.p`
  font-weight: 600;
  font-size: 38px;
  line-height: 57px;
  color: #ffffff;
  margin: 0;
`
const SignInBtnStyled = styled(ButtonMui)(({ theme }) => ({
  '&': {
    border: `1px solid${theme.palette.primary.dark}`,
    background: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    marginLeft: '10rem',
  },
}))
