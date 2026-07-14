import React from "react";
import { Link } from "react-router-dom";

function Homepage(){
    return( 
        <>
        <div className="flex flex-col items-center justify-center h-screen bg-slate-950">
        <h1 className="text-white text-4xl font-bold">Welcome to home</h1>
        <p className="text-white mt-0.5 text-2xl">This is the main landing page of our application.</p>
        <h2 className="text-white mt-4 text-3xl font-semibold ">Explore More</h2>
        <p className="text-white text-xl mt-0.5">Feel free to navigate to the About Us or Contact pages using the links above.</p>
        <Link to = "/" className="mt-8 text-xl font-semibold text-slate-950 hover:bg-cyan-600 hover:underline bg-cyan-500 p-2 rounded-2xl">
             Go to Landing page</Link>
        </div>

       </>
    );
} 
export default Homepage;
