import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50">
    <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* logo */}
        <div className="flex items-center gap-3  ">
         <img src="/images/logo.png" alt="logo" className="h-20 w-20" />

           <div >
             <h1 className="text-white text-xl font-bold font-mono">Real Estate</h1>
             <p className="text-white text-xs font-bold font-mono">Find Your Future.</p>
           </div>
        </div>
        <ul className=" text-white flex gap-10 items-center font-semibold font-mono  ">
          <li>
              <Link to="/homepage" className="relative group transition-colors duration-300 hover:text-cyan-300">
                Home <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
           </li>
           <li>
              <Link to="/about" className="relative group transition-colors duration-300 hover:text-cyan-300">
                About <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
           </li>
           <li>
              <Link to="/contact" className="relative group transition-colors duration-300 hover:text-cyan-300" >
                Contact <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
           </li>
           <li>
              <Link to="/listing" className="relative group transition-colors duration-300 hover:text-cyan-300">
                Listing <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
           </li>
         </ul>
    </div>
    </nav>
  );
}
export default Navbar;
