import React, { useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

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

  const showPlants = plants.filter(plant => {
    return plant.name.toLowerCase().includes(search.toLowerCase())
  })

  const handleDeletePlant = (id) => {
    const updatedPlants = plants.filter(plant => plant.id !== id)
    setPlants(updatedPlants)
  }

  return (
    <main>
      <NewPlantForm 
      onNewPlant={handleAddNewPlant}
      />
      <Search
      search={search}
      onSearchChange={setSearch}
       />
      <PlantList 
      plants={showPlants}
      handleDelete={handleDeletePlant}
      />
    </main>
  );
}

export default PlantPage;
