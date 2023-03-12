import { createAsyncThunk } from '@reduxjs/toolkit'
// eslint-disable-next-line import/no-cycle
import {
  createMealRequest,
  deleteMealsRequest,
  getMealsRequest,
  updateMealsRequest,
} from '../../axios-api/mealsService'

export const getMeals = createAsyncThunk(
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
export const postMeals = createAsyncThunk(
  'meals/postMeals',
  async (payload, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await createMealRequest(payload)
      dispatch(getMeals())
      return data.data
    } catch (error) {
      return rejectWithValue('Something went wrong  getMeals')
    }
  }
)

export const deleteMeals = createAsyncThunk(
  'meals/deleteMeals',
  async (id, { rejectWithValue, dispatch }) => {
    try {
      await deleteMealsRequest(id)
      return dispatch(getMeals())
    } catch (error) {
      return rejectWithValue('Something went wrong  deleteMeals')
    }
  }
)

export const editMeals = createAsyncThunk(
  'meals/updateeMeals',
  async (editMeal, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await updateMealsRequest(editMeal)
      dispatch(getMeals())
      return data.data
    } catch (error) {
      return rejectWithValue('Something went wrong  deleteMeals')
    }
  }
)
