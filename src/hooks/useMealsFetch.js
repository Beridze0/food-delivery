import { useState, useEffect } from 'react'

const useMealsFetch = (searchInput, categoryValue, generateRandomLetter) => {
  const [mealsData, setMealsData] = useState([])

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        let url = ""
        if (searchInput.length > 0) {
          url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`
        } else if (categoryValue) {
          url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${categoryValue}`
        } else {
          const letters = generateRandomLetter()
          const requests = letters.map((letter) =>
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
              .then((res) => res.json())
          )
          const results = await Promise.all(requests)
          setMealsData(results.flatMap((mealsObj) => mealsObj?.meals || []))
          return
        }

        const response = await fetch(url)
        const data = await response.json()
        
        if (data.meals && searchInput.length > 0) {
          const filteredMeals = data.meals.filter(meal => 
            meal.strMeal.toLowerCase().startsWith(searchInput.toLowerCase())
          )
          setMealsData(filteredMeals)
        } else {
          setMealsData([])
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchMeals()
  }, [searchInput, categoryValue, generateRandomLetter])

  return mealsData
}

export default useMealsFetch
