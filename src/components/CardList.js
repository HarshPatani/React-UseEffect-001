import Card from "../components/Card";
import React from "react";

const CardList = ({ data }) => {
  return (
    <div className="cardlist">
      {console.log(data)}
      {data.map((item, idx) => {
        return (
          <div key={idx} className="card">
            <Card item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
