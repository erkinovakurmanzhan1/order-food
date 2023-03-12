import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'
import { styled } from '@mui/system'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonMui from '../ui/ButtonMui'

export const withAuthModal = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate()

    const [isModalOpen, setModalOpen] = useState(false)

    const goToSignInHandler = () => {
      setModalOpen(false)
      navigate('/signin')
    }
    return (
      <>
        <Component {...props} showAuthModal={() => setModalOpen(true)} />

        <Dialog
          open={isModalOpen}
          keepMounted
          onClose={() => setModalOpen(false)}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-title">Not Authorized</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              In order to complete this action,please sign in.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <ButtonsStyled onClick={goToSignInHandler}>
              Go to sign in
            </ButtonsStyled>
            <ButtonsStyled onClick={() => setModalOpen(false)}>
              Ok
            </ButtonsStyled>
          </DialogActions>
        </Dialog>
      </>
    )
  }
  return Wrapper
}

const ButtonsStyled = styled(ButtonMui)(({ theme }) => ({
  '&': {
    border: `1px solid${theme.palette.primary.dark}`,
    color: theme.palette.primary.dark,
    marginTop: '1rem',
  },
}))
