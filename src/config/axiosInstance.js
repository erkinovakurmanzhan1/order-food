/* eslint-disable import/no-cycle */
import axios from 'axios'
import { signOut } from '../store/auth/auth.thunks'
import { store } from '../store/store'

const BASE_URL =
  'http://ec2-3-122-253-30.eu-central-1.compute.amazonaws.com:5500/api/v1'

// const headers = {
//   // UserID: 'kurmanzhan',
//   // 'Content-Type': 'application/json',
//   Authorization: store.getState().auth.token,
// }

// const headers = {
//   Authorization: store.getState().auth.token,
// }

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
})

axiosInstance.interceptors.request.use(
  function (config) {
    const newConfig = {
      ...config,
      headers: {
        ...config.headers,
        Authorization: store.getState().auth.token,
      },
    }
    return newConfig
  },
  function (error) {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if (error.response.status === 401) {
      store.dispatch(signOut())
    }

    return Promise.reject(error)
  }
)
