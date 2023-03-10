import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMeals } from '../../store/meals/meals.thunks'
import MealsList from './Meals.list'

const MealsItem = () => {
  const dispatch = useDispatch()
  const { meals } = useSelector((state) => state.meals)
  useEffect(() => {
    dispatch(getMeals())
  }, [])
  return (
    <ul>
      {meals.map((meal) => (
        <MealsList
          key={meal.title}
          mealName={meal.title}
          description={meal.description}
          price={meal.price}
          meal={meal}
        />
      ))}
    </ul>
  )
}

export default MealsItem
