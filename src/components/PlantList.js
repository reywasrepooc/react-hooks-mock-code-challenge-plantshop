import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, handleInStockClick, isInStock}) {

 
  return (
    <ul className="cards"> {plants.map(plant => (
      <PlantCard 
      key={plant.id}
      plant={plant}
      handleInStockClick={handleInStockClick}
      isInStock={isInStock}
      />
      ))
    } </ul>
  );
}

export default PlantList;
