import React from "react";
import { Link } from "react-router-dom";
function Template() {
  return (
    <div className="temp">
      <h1>Free Delivary on Your First Order</h1>
      <h6>
        Use Code <span style={{ color: "red" }}>FIRST10 </span> at Checkout for
        free delivery on Orders over $200
      </h6>
      <Link to="/shop">
        <button className="shop">Shop Now</button>
      </Link>
    </div>
  );
}

export default Template;
