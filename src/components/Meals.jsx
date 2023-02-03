import React from "react";
import Axios from "Axios";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../context";

import X from "./x";

export const Meals = () => {
  const [food, setFood] = useState([]);
  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const context = useContext(AppContext);

  const get = async () => {
    setLoading(true);
    const { data } = await Axios.get(
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );
    setFood(data.meals);
    setLoading(false);
    console.log(data.meals);
  };
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      get();
    }, 3000);
    return () => clearTimeout(timer);
    
  }, []);
  const handleClick = () => {
    setStatus(!status);
  };
  if (loading) {
    return (
      <div class="container">
        <div class="loading">
          <div class="ball one"></div>
          <div class="ball two"></div>
          <div class="ball three"></div>
          <div class="ball four"></div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>{context}</h1>
      {food && food.length > 0 && food.map((x) => <X x={x} y={context} />)}
    </div>
  );
};
