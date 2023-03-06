import { Grid, TextField, Typography } from '@mui/material'
import { styled } from '@mui/system'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import styledComponent from 'styled-components'
import ButtonMui from '../../components/UI/ButtonMui'
import { signIn } from '../../store/auth/thunks'

const SignIn = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const inputEmailChangeHandler = (e) => {
    setEmail(e.target.value)
    setError('')
  }
  const inputPasswordChangeHandler = (e) => {
    setPassword(e.target.value)
    setError('')
  }

  const submitHandler = (e) => {
    e.preventDefault()
    const data = {
      email,
      password,
    }
    dispatch(signIn(data))
      .unwrap()
      .then(() => navigate('/admin/meals'))
      .catch((err) => {
        setError(err.response.data.message)
      })
  }

  const isEmailValid = () => {
    return email.length === 0 || (email.length > 0 && email.includes('@'))
  }

  const isPasswordlValid = () => {
    return (
      password.length === 0 || (password.length > 0 && password.length >= 6)
    )
  }

  return (
    <CridMainContainer>
      <GridContainer>
        <form onSubmit={submitHandler}>
          <TextFieldStyled
            error={!isEmailValid()}
            value={email}
            onChange={inputEmailChangeHandler}
            label="Email"
          />
          <TextFieldStyled
            error={!isPasswordlValid()}
            value={password}
            onChange={inputPasswordChangeHandler}
            label="Password"
          />
          {error && (
            <Typography
              textAlign="center"
              sx={{ color: (theme) => theme.palette.error.main }}
            >
              {error}
            </Typography>
          )}
          <SignInBtnStyled type="submit">sign in</SignInBtnStyled>
          <StyledLink to="/signup">{`Don't have account?`}</StyledLink>
        </form>
      </GridContainer>
    </CridMainContainer>
  )
}

export default SignIn

const CridMainContainer = styled(Grid)(() => ({
  '&': {
    display: 'flex',
    justifyContent: 'center',
  },
}))
const GridContainer = styled(Grid)(() => ({
  '&': {
    background: '#ffff',
    width: '500px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '40px',
    borderRadius: '15px',
  },
}))
const TextFieldStyled = styled(TextField)(() => ({
  '&': {
    marginBottom: '1rem',
  },
}))
const SignInBtnStyled = styled(ButtonMui)(({ theme }) => ({
  '&': {
    border: `1px solid${theme.palette.primary.dark}`,
    background: 'none',
    color: theme.palette.primary.dark,
    marginLeft: '10rem',
  },
}))

const StyledLink = styledComponent(Link)`
  margin-left: 8.5rem;
  text-decoration:none;
  padding-top: .8rem;
`
