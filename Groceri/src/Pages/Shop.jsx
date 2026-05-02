import React from "react";
import FeaturedProducts from "../components/Featured.jsx";
import Template from "../components/Template.jsx";

function Shop() {
  return (
    <>
       
      <FeaturedProducts title="All Products" selectedCategory="All" />

      <Template />
    </>
  );
}

export default Shop;