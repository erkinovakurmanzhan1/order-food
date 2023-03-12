// eslint-disable-next-line import/no-cycle
import { axiosInstance } from '../config/axiosInstance'

export const getMyOrderRequest = () => {
  return axiosInstance.get(`/orders`)
}

export const createOrderRequest = (orderData) => {
  return axiosInstance.post(`/orders`, orderData)
}

export const getAllOrdersRequest = () => {
  return axiosInstance.get(`/orders/all`)
}
