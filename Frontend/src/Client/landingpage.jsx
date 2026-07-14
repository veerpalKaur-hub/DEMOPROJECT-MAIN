import React from "react";
import { Link } from "react-router-dom";

function Landingpage() {
  return (
    <>
      <div className="relative w-full h-screen ">
        <img
          src="/images/ba.png"
          alt="bg image"
          className="w-full h-full  object-cover"
        />
      </div>
      <div className="m-7 ml-15 absolute inset-0 flex flex-col  justify-center h-screen text-white text-left ">
        <div>
          <h1 className=" text-7xl font-mono font-extrabold">
            Find Your <br /> <span className="text-cyan-600">Dream Home.</span>
          </h1>
          <br />
        </div>
        <h2 className=" text-2xl font-semibold font-mono">
          Explore Our Services
        </h2>
        <p className=" mt-0.5 text-xl font-mono">
          {" "}
          Discover premium properties in the best locations.
          <br /> Modern living, unmatched comfort, and endless possibilities.
        </p>
      </div>

      {/*how it works */}
      <section>
        <div className=" bg-cyan-700 py-6 px-5 ">
          <h2 className="text-3xl font-serif font-extrabold flex flex-col items-center justify-center">
            How it Works ?
          </h2>

          <div className="font-mono text-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4 ">
            <section className=" bg-slate-800  text-white rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-black duration-150 transition-all ease-in-out p-2">
              <h3 className="font-bold">1. Discover </h3>
              <p >
                Browse our curated listings of premium properties. Use filters
                to find exactly what you need—whether it’s a modern rental, a
                home to buy, or an EV-friendly property in Bangalore.
              </p>
            </section>

            <section className=" bg-slate-800  text-white rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-black duration-150 transition-all ease-in-out p-2">
              <h3 className="font-bold">2. Connect & Tour </h3>
              <p>
                Found a place you love? Connect instantly with our dedicated
                local real estate experts to schedule a virtual or in-person
                tour at your convenience.
              </p>
            </section>

            <section className=" bg-slate-800  text-white rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-black duration-150 transition-all ease-in-out p-2">
              <h3 className="font-bold">3. Close the Deal </h3>
              <p>
                We guide you through the entire process—from navigating mortgage
                calculators and market trends to handling paperwork—ensuring a
                smooth, stress-free transition.
              </p>
            </section>

            <section className=" bg-slate-800  text-white rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-black duration-150 transition-all ease-in-out p-2">
              <h3 className="font-bold">4. Move In</h3>
              <p>
                Pick up your keys and step into your dream home. Your journey
                home officially begins here!
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
export default Landingpage;
