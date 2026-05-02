import { useState } from "react";
import Hero from "../components/Hero.jsx";
import Category from "../components/Category.jsx";
import FeaturedProducts from "../components/Featured.jsx";
import Template from "../components/Template.jsx";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <>
      <Hero />

      <Category setSelectedCategory={setSelectedCategory} />

      <FeaturedProducts
        selectedCategory={selectedCategory}
        title={
          selectedCategory === "All"
            ? "Featured Products"
            : selectedCategory
        }
      />

      <Template />
    </>
  );
};

export default Home;