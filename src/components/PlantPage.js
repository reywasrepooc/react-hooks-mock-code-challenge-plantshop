import React, { useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])

  const url= "http://localhost:6001/plants"
  useEffect(() => { 
    fetch(url)
    .then(response => response.json())
    .then(data => setPlants(data))
  }, [])

  const handleAddNewPlant = (newPlant) => {
    const updatedPlants = [...plants, newPlant]
    setPlants(updatedPlants)
  }

  return (
    <main>
      <NewPlantForm 
      onNewPlant={handleAddNewPlant}
      />
      <Search />
      <PlantList 
      plants={plants}
      />
    </main>
  );
}

export default PlantPage;
