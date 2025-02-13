import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import MainContent from "./components/MainContent/MainContent";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import SearchBar from "./components/MainContent/SearchBar/SearchBar";
import generateRandomLetter from "./utils/letters";
import useMealsFetch from "./hooks/useMealsFetch";

const App = () => {
  const [searchInput, setSearchInput] = useState("");
  const [categoryValue, setCategoryValue] = useState();
  const [mealDetails, setMealDetails] = useState(JSON.parse(localStorage.getItem('meal-details')) || []);

  const mealsData = useMealsFetch(
    searchInput,
    categoryValue,
    generateRandomLetter
  );

  const getSearchAndCategory = (value) => {
    setSearchInput(value);
    setCategoryValue(value);
  };

  const getMealsDetails = (meal) => {
    setMealDetails(prev => {
      const prevMeal = [...prev]
      
      
      if(prevMeal.some((meals) => meals.idMeal === meal.idMeal)){
        alert("Already in a cart")
        return [...prev]
      } else {
        localStorage.setItem('meal-details', JSON.stringify([...prevMeal, meal]))
        return [...prevMeal, meal]
      }
    })
  };

  return (
    <div className="app">
      <Sidebar />
      <div className="app-main-content">
        <Header />
        <SearchBar getSearchAndCategory={getSearchAndCategory} />
        <Routes>
          <Route
            path="/"
            element={
              <MainContent
                mealsData={mealsData}
                getMealsDetails={getMealsDetails}
                mealDetails={mealDetails}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
