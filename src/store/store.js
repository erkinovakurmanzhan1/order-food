import { configureStore } from '@reduxjs/toolkit'
// eslint-disable-next-line import/no-cycle
import { authSLice } from './auth/auth.slice'
import { basketSlice } from './basket/basket.slice'
import { mealsSlice } from './meals/meals.slice'
import { orderSlice } from './order/order.slice'
import { uiSlice } from './ui/ui.slice'

export const store = configureStore({
  reducer: {
    [mealsSlice.name]: mealsSlice.reducer,
    [basketSlice.name]: basketSlice.reducer,
    [uiSlice.name]: uiSlice.reducer,
    [authSLice.name]: authSLice.reducer,
    [orderSlice.name]: orderSlice.reducer,
  },
})
