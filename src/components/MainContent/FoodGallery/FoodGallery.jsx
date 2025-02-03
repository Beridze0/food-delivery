import React, { useEffect } from 'react'
import './FoodGallery.css'
import FoodCard from '../../FoodCard/FoodCard'

const FoodGallery = () => {

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const letters = [];

    for (let i = 1; i <= 2; i++) {
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
            console.log(results) 
        } catch (error) {
            console.error("Error fetching data:", error)
        }
    }

    fetchMeals()
}, [])


    




  return (
    <div className='food-gallery-container'>
            <FoodCard />
    </div>
  )
}

export default FoodGallery