import './FoodGallery.css'
import FoodCard from '../../FoodCard/FoodCard'

const FoodGallery = ({mealsData, getMealsDetails}) => {

  return (
    <div className='food-gallery-container'>
      {mealsData?.map((meal, i) => (
            <FoodCard key={i} mealObj={meal} getMealsDetails={getMealsDetails} />
        ))}
    </div>  
  )
}

export default FoodGallery