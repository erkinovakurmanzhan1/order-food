import { Grid, TextField } from '@mui/material'
import { styled } from '@mui/system'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import styledComponent from 'styled-components'
import ButtonMui from '../../components/ui/ButtonMui'
import { UserRoles } from '../../lib/constants/common'
import { signUp } from '../../store/auth/auth.thunks'

const SignUp = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const inputNameChangeHandler = (e) => {
    setName(e.target.value)
  }

  const inputEmailChangeHandler = (e) => {
    setEmail(e.target.value)
  }
  const inputPasswordChangeHandler = (e) => {
    setPassword(e.target.value)
  }

  const inputConfirmChangeHandler = (e) => {
    setConfirmPassword(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    const data = {
      email,
      name,
      password,
      role: UserRoles.ADMIN,
    }
    dispatch(signUp(data))
      .unwrap()
      .then(() => navigate('/'))
  }

  return (
    <CridMainContainer>
      <GridContainer>
        <form onSubmit={submitHandler}>
          <TextFieldStyled
            value={name}
            onChange={inputNameChangeHandler}
            label="Name"
          />
          <TextFieldStyled
            value={email}
            onChange={inputEmailChangeHandler}
            label="Email"
          />
          <TextFieldStyled
            value={password}
            onChange={inputPasswordChangeHandler}
            label="Password"
          />
          <TextFieldStyled
            value={confirmPassword}
            onChange={inputConfirmChangeHandler}
            label="ConfirmPassword"
          />
          <SignInBtnStyled type="submit">sign up</SignInBtnStyled>
          <StyledLink to="/signin">Have an account?</StyledLink>
        </form>
      </GridContainer>
    </CridMainContainer>
  )
}

export default SignUp

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
