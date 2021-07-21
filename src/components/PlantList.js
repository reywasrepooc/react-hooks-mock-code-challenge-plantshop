import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {

  const plantDetails = plants.map(plant => (
    <PlantCard 
    key={plant.id}
    plant={plant}
    />
  ))
  return (
    <ul className="cards">{plantDetails}</ul>
  );
}

export default PlantList;
