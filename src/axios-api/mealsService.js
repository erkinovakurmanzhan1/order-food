// eslint-disable-next-line import/no-cycle
import { axiosInstance } from '../config/axiosInstance'

export const getMealsRequest = () => {
  return axiosInstance.get('/foods')
}

export const createMealRequest = (data) => {
  return axiosInstance.post(`/foods`, data)
}

export const deleteMealsRequest = (id) => {
  return axiosInstance.delete(`/foods/${id}`)
}

export const updateMealsRequest = (editMeal) => {
  return axiosInstance.put(`/foods/${editMeal.id}`, editMeal)
}

// export const

// ROLE:"USER"
// /foods  GET

// ROLE:"ADMIN"
// /foods GET

// foods POST
// body : {title:string,description:string,price:number}
// headers:{Authorization:token(admindikin salsyn)}

// update
// foods/:id PUT
// body : {title:string,description:string,price:number}
// headers:{Authorization:token(admindikin salsyn)}

// delete
// foods/:id DELETE
// headers:{Authorization:token(admindikin salsyn)}

// doing GET one foods
// foods/:id GET
// headers:{Authorization:token(admindikin salsyn)}
