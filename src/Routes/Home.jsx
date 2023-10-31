import React from "react";
import Navbar from "../pages/Home/Navbar/Navbar";
import Banner from "../pages/Home/Banner/Banner";
import Product from "../pages/Home/Product/Product";
import Gallery from "../pages/Home/Gallery/Gallery";
import Footer from "../pages/Home/Footer/Footer";

const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Banner />
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Product />
        <Gallery />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
