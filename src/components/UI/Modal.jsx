import React from 'react'
import { styled } from '@mui/system'

const Modal = ({ children }) => {
  return <Container>{children}</Container>
}

export default Modal
const Container = styled('div')(({ theme }) => ({
  position: 'fixed',
  top: '20vh',
  background: theme.palette.secondary.light,
  color: theme.palette.primary.constrastText,
  padding: '1rem',
  borderRadius: '14px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
  zIndex: '30',
  animation: 'slide-down 300ms ease-out forwards',
  width: ' 40rem',
  left: 'calc(50% - 20rem)',
}))
