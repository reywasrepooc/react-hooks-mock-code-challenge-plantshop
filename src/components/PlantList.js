import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, handleInStockClick, isInStock, handleDelete}) {

 
  return (
    <ul className="cards"> {plants.map(plant => (
      <PlantCard 
      key={plant.id}
      plant={plant}
      handleInStockClick={handleInStockClick}
      isInStock={isInStock}
      handleDelete={handleDelete}
      />
      ))
    } </ul>
  );
}

export default PlantList;
