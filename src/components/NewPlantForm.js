import React, { useState } from "react";

function NewPlantForm({ onNewPlant}) {

  const[name, setName] = useState("")
  const[image, setImage] = useState("")
  const[price, setPrice] = useState("")

  const handlePlantSubmit = (event) => {
    event.preventDefault()
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "name": name,
        "image": image,
        "price": price
      })
    })
    .then(response => response.json())
    .then((newPlant) => onNewPlant(newPlant))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handlePlantSubmit}>
        <input 
        name="name" 
        placeholder="Plant name" 
        value={name}
        onChange={(event) => setName(event.target.value)}
        />
        <input 
        name="image" 
        placeholder="Image URL" 
        value={image}
        onChange={(event) => setImage(event.target.value)}
        />
        <input 
        name="price" 
        step="0.01" 
        placeholder="Price" 
        value={price}
        onChange={(event) => setPrice(parseFloat(event.target.value))}
        />
        <button>Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
