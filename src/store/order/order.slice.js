import { createSlice } from '@reduxjs/toolkit'
// eslint-disable-next-line import/no-cycle
import { getAllOrders, getMyOrder } from './order.thunks'

const initialState = {
  order: [],
  isLoading: false,
  error: '',
}

export const orderSlice = createSlice({
  name: 'orders',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getMyOrder.fulfilled, (state, action) => {
      state.order = action.payload
      state.isLoading = false
      state.error = ''
    })
    builder.addCase(getMyOrder.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getMyOrder.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })

    builder.addCase(getAllOrders.fulfilled, (state, action) => {
      state.order = action.payload
      state.isLoading = false
      state.error = ''
    })
    builder.addCase(getAllOrders.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getAllOrders.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  },
})

export const orderActions = orderSlice.actions
