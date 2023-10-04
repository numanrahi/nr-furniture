import React from "react";
import Navbar from "../pages/Home/Navbar/Navbar";
import Banner from "../pages/Home/Banner/Banner";
import Category from "../pages/Home/Category/Category";
import Product from "../pages/Home/Product/Product";
import Gallery from "../pages/Home/Gallery/Gallery";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner/>
      <Category/>
      <Product/>
      <Gallery/>
    </div>
  );
};

export default Home;
