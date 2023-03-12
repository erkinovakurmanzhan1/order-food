import { createAsyncThunk } from '@reduxjs/toolkit'
// eslint-disable-next-line import/no-cycle
import {
  deleteBasketRequest,
  getBasketRequest,
  postBasketRequest,
  putBasketRequest,
} from '../../axios-api/basketService'

export const getBasket = createAsyncThunk(
  'basket/getBasket',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getBasketRequest()
      return data.data.items
    } catch (error) {
      return rejectWithValue('something went wrong getBasket ')
    }
  }
)

export const addToBasket = createAsyncThunk(
  'basket/addToBasket',
  async (newItem, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await postBasketRequest(newItem)
      dispatch(getBasket())
      return data.data.items
    } catch (error) {
      return rejectWithValue('something went wrong basket')
    }
  }
)

export const deleteBasketItem = createAsyncThunk(
  'basket/deleteBasket',
  async (id, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await deleteBasketRequest(id)
      dispatch(getBasket())
      return data.data.items
    } catch (error) {
      return rejectWithValue('something  went wrong delete ')
    }
  }
)

export const updateBasketItem = createAsyncThunk(
  'basket/updateBasket',
  async ({ id, amount }, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await putBasketRequest(id, amount)
      dispatch(getBasket())
      return data.data.items
    } catch (error) {
      return rejectWithValue('something went wrong update')
    }
  }
)
