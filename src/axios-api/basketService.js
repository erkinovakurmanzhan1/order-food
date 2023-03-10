import { axiosInstance } from '../config/axiosInstance'

export const putBasketRequest = (id, basketAmount, token) => {
  return axiosInstance.put(
    `/basketitem/${id}/update`,
    { amount: basketAmount },
    { headers: { Authorization: token } }
  )
}
export const deleteBasketRequest = (id, token) => {
  return axiosInstance.delete(`/basketitem/${id}/delete`, {
    headers: { Authorization: token },
  })
}

export const getBasketRequest = (token) => {
  return axiosInstance.get('/basket', { headers: { Authorization: token } })
}
export const postBasketRequest = (newItem, token) => {
  return axiosInstance.post(
    `/foods/${newItem.id}/addToBasket`,
    { amount: newItem.amount },
    {
      headers: { Authorization: token },
    }
  )
}

export const submitRequest = (orderData) => {
  return axiosInstance.post(
    `https://jsonplaceholder.typicode.com/posts`,
    orderData
  )
}
