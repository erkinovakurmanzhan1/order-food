import { createAsyncThunk } from '@reduxjs/toolkit'
import { getMealsRequest } from '../../axios-api/mealsService'

const getMeals = createAsyncThunk(
  'meals/getMeals',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getMealsRequest()
      return data.data
    } catch (error) {
      return rejectWithValue('Something went wrong  getMeals')
    }
  }
)
export default getMeals
