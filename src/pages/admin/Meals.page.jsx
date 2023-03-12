import React, { useState } from 'react'
import { TextField } from '@mui/material'
import { styled } from '@mui/material/styles'
import styledComponent from 'styled-components'
import { useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import ButtonMui from '../../components/ui/ButtonMui'
import Modal from '../../components/ui/Modal'
import { postMeals } from '../../store/meals/meals.thunks'
import MealsItem from './Meals.item'

const Meals = () => {
  const dispatch = useDispatch()
  const [params, setParams] = useSearchParams()
  const [title, setMeals] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState()

  const openModalHandler = () => {
    params.set('modal', 'addNewMeals')
    setParams(params)
  }

  const closeModalHandler = () => {
    params.delete('modal')
    setParams(params)
  }

  const mealsChangeHandler = (e) => {
    setMeals(e.target.value)
  }
  const descriptionChangeHandler = (e) => {
    setDescription(e.target.value)
  }

  const priceChangeHandler = (e) => {
    setPrice(+e.target.value)
  }

  const addMealsHandler = (e) => {
    e.preventDefault()
    const meal = {
      title,
      description,
      price,
    }
    dispatch(postMeals(meal))
    setMeals('')
    setDescription('')
    setPrice()
    setParams(false)
  }
  return (
    <div>
      <div>
        {params.has('modal') ? (
          <Modal>
            <form onSubmit={addMealsHandler}>
              <Box>
                <TextFieldStyled
                  label="meals"
                  onChange={mealsChangeHandler}
                  value={title}
                  type="text"
                />
                <TextFieldStyled
                  label="description"
                  onChange={descriptionChangeHandler}
                  value={description}
                  type="text"
                />
                <TextFieldStyled
                  label="price"
                  onChange={priceChangeHandler}
                  value={price}
                  type="number"
                />
                <ButtonsContainer>
                  <SignInBtnStyled type="submit">Add Meal</SignInBtnStyled>
                  <SignInBtnStyled onClick={closeModalHandler}>
                    Close
                  </SignInBtnStyled>
                </ButtonsContainer>
              </Box>
            </form>
          </Modal>
        ) : null}
        <ModalButtonStyled onClick={openModalHandler}>
          Add New Meals
        </ModalButtonStyled>
      </div>
      <MealsItem />
    </div>
  )
}

export default Meals

const ButtonsContainer = styledComponent.div`
display:flex;
justify-content:space-around;
padding:2rem;
margin-right:5.2rem;

`

const Box = styledComponent.div`
margin-left:5rem;
`

const TextFieldStyled = styled(TextField)(() => ({
  '&': {
    width: '450px',
    outline: 'none',
    margin: '0 auto',
    marginTop: '2.5rem',
    background: '#ffff',
    borderRadius: '3px',
  },
}))

const SignInBtnStyled = styled(ButtonMui)(({ theme }) => ({
  '&': {
    border: `1px solid${theme.palette.primary.dark}`,
    background: 'none',
    color: theme.palette.primary.dark,
  },
}))

const ModalButtonStyled = styled(ButtonMui)(({ theme }) => ({
  '&': {
    border: `1px solid${theme.palette.primary.dark}`,
    color: theme.palette.primary.dark,
  },
}))
