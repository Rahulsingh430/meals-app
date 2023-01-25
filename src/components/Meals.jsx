import React from "react";
import Axios from "Axios";
import { useState } from "react";
import { useEffect } from "react";

export const Meals = () => {
  const [ food, setFood ] = useState([]);

  const get = async () => {
    const  {data}  = await Axios.get(
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );
    setFood(data.meals);
    console.log(data.meals);
  };
  useEffect(() => {
    get();
  }, []);

  return (
    <div>
      {food && food.length >0 && food.map((x) => (
        
        <div>
          <h3>{x.strMeal}</h3>
          <img src={x.strMealThumb} alt="" />
          </div>
     ) )}
    </div>
  );
};
