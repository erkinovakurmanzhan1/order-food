import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  createMealRequest,
  deleteMealsRequest,
  getMealsRequest,
  updateMealsRequest,
} from '../../axios-api/mealsService'

export const getMeals = createAsyncThunk(
  'meals/getMeals',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { token } = getState().auth

      const { data } = await getMealsRequest(token)
      return data.data
    } catch (error) {
      return rejectWithValue('Something went wrong  getMeals')
    }
  }
)
export const postMeals = createAsyncThunk(
  'meals/postMeals',
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { token } = getState().auth
      const { data } = await createMealRequest(payload, token)
      dispatch(getMeals())
      return data.data
    } catch (error) {
      return rejectWithValue('Something went wrong  getMeals')
    }
  }
)

export const deleteMeals = createAsyncThunk(
  'meals/deleteMeals',
  async (id, { rejectWithValue, getState, dispatch }) => {
    try {
      const { token } = getState().auth
      await deleteMealsRequest(id, token)
      return dispatch(getMeals())
    } catch (error) {
      return rejectWithValue('Something went wrong  deleteMeals')
    }
  }
)

export const editMeals = createAsyncThunk(
  'meals/deleteMeals',
  async (editMeal, { rejectWithValue, getState, dispatch }) => {
    try {
      const { token } = getState().auth
      const { data } = await updateMealsRequest(editMeal, token)
      dispatch(getMeals())
      return data.data
    } catch (error) {
      return rejectWithValue('Something went wrong  deleteMeals')
    }
  }
)
