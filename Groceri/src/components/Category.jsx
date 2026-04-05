import React from "react";
import "./Navbar.css";

import fruits from "../assets/fruits.png";
import vegetables from "../assets/vegetabels.png";
import dairy from "../assets/dairy.png";
import bakery from "../assets/bakery.png";
import meat from "../assets/meat.png";
import beverages from "../assets/beverages.png";

const Category = () => {
  const categories = [
    { name: "Fruits", image: fruits },
    { name: "Vegetables", image: vegetables },
    { name: "Dairy", image: dairy },
    { name: "Bakery", image: bakery },
    { name: "Meat", image: meat },
    { name: "Beverages", image: beverages },
  ];

  return (
    <div className="category">
      <h2 style={{ color: "black" }}>Shop by Category</h2>

      <div className="category-container">
        {categories.map((item, index) => (
          <div className="category-card" key={index}>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
