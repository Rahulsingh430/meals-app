import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../context";

export default function X({ x }) {
  const [status, setStatus] = useState(false);
  const context = useContext(AppContext);
  return (
    <div>
      <center>
        <h3>{x.strMeal}</h3>
        <div>
          <img src={x.strMealThumb} alt="" onClick={() => setStatus(!status)} />
          <p>Price: {context}</p>

          {status ? <p>{x.strInstructions}</p> : null}
        </div>
      </center>
    </div>
  );
}
