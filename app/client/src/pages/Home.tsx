import React from "react";
import Navbar from "../components/landing/navbar.tsx";
import Hero from "../components/landing/hero.tsx";


const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
  
    </div>
  );
};

export default Home;