import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Hr from "../components/Hr";
import Admin from "../components/Admin";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Hr />
      <Admin />
      <Footer />
    </>
  );
};

export default Home;
