import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center bg-white">
      <h1 className="max-w-4xl text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl">
        Build, Lend, Borrow, & Swap Tokens
      </h1>
      <p className="mt-6 max-w-3xl text-lg text-gray-600">
        We are building a seamless platform where users can lend and borrow tokens, 
        and swap them effortlessly — all in one place.
      </p>
      <div className="mt-10 flex space-x-4">
        <a
          href="#signup"
          className="px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition"
        >
          Get Started
        </a>
        <a
          href="#learn-more"
          className="px-6 py-3 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Hero;
