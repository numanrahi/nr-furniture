import React from "react";
import Navbar from "../pages/Home/Navbar/Navbar";
import Banner from "../pages/Home/Banner/Banner";
import Category from "../pages/Home/Category/Category";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner/>
      <Category/>
    </div>
  );
};

export default Home;
