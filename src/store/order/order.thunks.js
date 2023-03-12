import { createAsyncThunk } from '@reduxjs/toolkit'
// eslint-disable-next-line import/no-cycle
import {
  createOrderRequest,
  getAllOrdersRequest,
  getMyOrderRequest,
} from '../../axios-api/orderService'

export const getMyOrder = createAsyncThunk(
  'basket/getOrder',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getMyOrderRequest()
      return data.data
    } catch (error) {
      return rejectWithValue('Something went wrong  getOrders')
    }
  }
)

export const getAllOrders = createAsyncThunk(
  'basket/getAllOrders',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getAllOrdersRequest()
      return data.data
    } catch (error) {
      return rejectWithValue('Something went wrong  getAllOrders')
    }
  }
)
export const submitOrder = createAsyncThunk(
  'basket/postOrder',
  async (payload, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await createOrderRequest(payload)
      dispatch(getAllOrders())
      dispatch(getMyOrder())
      return data.data
    } catch (error) {
      return rejectWithValue('Something went wrong  postOrders')
    }
  }
)
