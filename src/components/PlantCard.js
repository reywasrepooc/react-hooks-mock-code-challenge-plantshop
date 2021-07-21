import React, { useState } from "react";

function PlantCard({ plant, handleDelete }) {
  const [isInStock, setIsInStock] = useState(true)
  const { name, image, price, id } = plant
  
  const handleInStockClick = () => {
    setIsInStock(!isInStock)
  }

  const handleDeleteClick = () => {
    fetch(`http://localhost:6001/plants/${id}`, {
      method:"DELETE"
    })
    .then(handleDelete(id))
  }

return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button className="primary" onClick={handleInStockClick}>In Stock</button>
      ) : (
        <button onClick={handleInStockClick}>Out of Stock</button>
      )}
       <button onClick={handleDeleteClick}> Delete me</button>
    </li>
  );
}

export default PlantCard;
