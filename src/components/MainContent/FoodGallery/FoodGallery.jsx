import './FoodGallery.css'
import FoodCard from '../../FoodCard/FoodCard'

const FoodGallery = ({mealsData}) => {

  return (
    <div className='food-gallery-container'>
      {mealsData?.map((meal, i) => (
            <FoodCard key={i} mealObj={meal} />
        ))}
    </div>  
  )
}

export default FoodGallery