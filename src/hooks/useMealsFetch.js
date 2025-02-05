import { useState, useEffect } from 'react'

const useMealsFetch = (searchInput, categoryValue, generateRandomLetter) => {
  const [mealsData, setMealsData] = useState()

  useEffect(() => {
    const fetchMeals = async () => {
      if (searchInput.length > 0) {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
          .then((res) => res.json())
          .then((data) => setMealsData(data.meals))
          .catch((error) => console.error('Error fetching data:', error))
      } else if(categoryValue){
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${categoryValue}`)
          .then((res) => res.json())
          .then((data) => setMealsData(data.meals))
          .catch((error) => console.error('Error fetching data:', error))
      }
      else{
        const letters = generateRandomLetter()
        try {
          const requests = letters.map((letter) =>
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`).then((res) => res.json())
          )
          const results = await Promise.all(requests);
          setMealsData(results.flatMap((mealsObj) => mealsObj?.meals || []));
        } catch (error) {
          console.error('Error fetching data:', error)
        }
      }
    }

    fetchMeals();
  }, [searchInput, generateRandomLetter])

  return mealsData;
};

export default useMealsFetch
