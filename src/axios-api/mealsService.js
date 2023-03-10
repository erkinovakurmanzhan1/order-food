import { axiosInstance } from '../config/axiosInstance'

export const getMealsRequest = (token) => {
  return axiosInstance.get('/foods', { headers: { Authorization: token } })
}

export const createMealRequest = (data, token) => {
  return axiosInstance.post(`/foods`, data, {
    headers: { Authorization: token },
  })
}

export const deleteMealsRequest = (id, token) => {
  return axiosInstance.delete(`/foods/${id}`, {
    headers: { Authorization: token },
  })
}

export const updateMealsRequest = (editMeal, token) => {
  return axiosInstance.put(`/foods/${editMeal.id}`, editMeal, {
    headers: { Authorization: token },
  })
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
