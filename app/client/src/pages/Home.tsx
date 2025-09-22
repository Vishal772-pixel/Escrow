import React from "react";
import Navbar from "../components/landing/navbar";
import Hero from "../components/landing/hero";


const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
  
    </div>
  );
};

export default Home;