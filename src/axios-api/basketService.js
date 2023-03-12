// eslint-disable-next-line import/no-cycle
import { axiosInstance } from '../config/axiosInstance'

export const putBasketRequest = (id, basketAmount) => {
  return axiosInstance.put(`/basketitem/${id}/update`, { amount: basketAmount })
}
export const deleteBasketRequest = (id) => {
  return axiosInstance.delete(`/basketitem/${id}/delete`, {})
}

export const getBasketRequest = () => {
  return axiosInstance.get('/basket')
}
export const postBasketRequest = (newItem) => {
  return axiosInstance.post(`/foods/${newItem.id}/addToBasket`, {
    amount: newItem.amount,
  })
}
