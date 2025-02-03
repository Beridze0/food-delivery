import React, { useEffect, useState } from 'react'
import './FoodGallery.css'
import FoodCard from '../../FoodCard/FoodCard'

const FoodGallery = () => {

  const [mealsData, setMealsData] = useState()

  const alphabet = "abcdefghjklmnopqrstwy";
    const letters = [];

    for (let i = 1; i <= 3; i++) {
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        letters.push(alphabet[randomIndex])
    }


    useEffect(() => {
      const fetchMeals = async () => {
          try {
              const requests = letters.map(letter => 
                  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`).then(res => res.json())
              );
              
              const results = await Promise.all(requests)
              setMealsData(results) 
          } catch (error) {
              console.error("Error fetching data:", error)
          }
      }
  
      fetchMeals()
  }, [])

  



    




  return (
    <div className='food-gallery-container'>
      {mealsData && mealsData?.flatMap((mealsObj) => mealsObj?.meals || [])
        .map((meal, i) => (
            <FoodCard key={i} mealObj={meal} />
        ))}
    </div>  
  )
}

export default FoodGallery