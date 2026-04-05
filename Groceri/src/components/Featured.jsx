import { products } from "../Utils/Data";
import "./Navbar.css";
import { useState } from "react";
import { useCart } from "../context/CartContext";

const FeaturedProducts = ({ title = "Featured Products" }) => {
  const itemsPerRow = 5;
  const rowsToShow = 2;
  const initialCount = itemsPerRow * rowsToShow;

  const [showAll, setShowAll] = useState(false);

  // addToCart from context
  const { addToCart } = useCart();

  const visibleProducts = showAll ? products : products.slice(0, initialCount);

  return (
    <div className="featured">
      {/* Dynamic title */}
      <h2 style={{ textAlign: "center", padding: "30px" }}>{title}</h2>

      <div className="product-grid">
        {visibleProducts.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.name} />

            <p className="category">{item.category}</p>
            <h4>{item.name}</h4>
            <p>{item.quantity}</p>

            <div className="price-cart">
              <span>₹{item.price}</span>

              {/* Connect button */}
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>

      <div className="showall">
        <button onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default FeaturedProducts;
