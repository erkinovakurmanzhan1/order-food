import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  deleteBasketRequest,
  getBasketRequest,
  postBasketRequest,
  putBasketRequest,
  submitRequest,
} from '../../axios-api/basketService'

export const getBasket = createAsyncThunk(
  'basket/getBasket',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { token } = getState().auth
      const { data } = await getBasketRequest(token)
      return data.data.items
    } catch (error) {
      return rejectWithValue('something went wrong getBasket ')
    }
  }
)

export const addToBasket = createAsyncThunk(
  'basket/addToBasket',
  async (newItem, { dispatch, rejectWithValue, getState }) => {
    try {
      const { token } = getState().auth
      const { data } = await postBasketRequest(newItem, token)
      dispatch(getBasket())
      return data.data.items
    } catch (error) {
      return rejectWithValue('something went wrong basket')
    }
  }
)

export const deleteBasketItem = createAsyncThunk(
  'basket/deleteBasket',
  async (id, { dispatch, rejectWithValue, getState }) => {
    try {
      const { token } = getState().auth
      const { data } = await deleteBasketRequest(id, token)
      dispatch(getBasket())
      return data.data.items
    } catch (error) {
      return rejectWithValue('something  went wrong delete ')
    }
  }
)

export const updateBasketItem = createAsyncThunk(
  'basket/updateBasket',
  async ({ id, amount }, { dispatch, rejectWithValue, getState }) => {
    try {
      const { token } = getState().auth
      const { data } = await putBasketRequest(id, amount, token)
      dispatch(getBasket())
      return data.data.items
    } catch (error) {
      return rejectWithValue('something went wrong update')
    }
  }
)

export const submitOrder = createAsyncThunk(
  'basket/submitOrder',
  async ({ orderData }, { dispatch, rejectWithValue }) => {
    try {
      await submitRequest(orderData)
      return dispatch(getBasket())
    } catch (error) {
      return rejectWithValue('something went wrong submitorder')
    }
  }
)
