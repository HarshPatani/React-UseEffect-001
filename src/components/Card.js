import React from "react";
// import { useNavigate } from "react-router-dom";

const Card = ({ key, item }) => {
  //   const navigate = useNavigate();

  return (
    <>
      {console.log(item)}

      <img loading="lazy" src={item.recipe.image} alt={item.recipe.label} />
      <p>{item.recipe.label}</p>
    </>
  );
};

export default Card;
