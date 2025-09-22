import React from "react";
import Navbar from "@/components/landing/navbar";
import Hero from "@/components/landing/hero";
import Footer from "@/components/landing/footer";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;