import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HumanResources from "../components/Hr";
import FinanceLogistics from "../components/Admin";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HumanResources />
      <FinanceLogistics />
      <Footer />
    </>
  );
};

export default Home;
