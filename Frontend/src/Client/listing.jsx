import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Listitems } from "../Dummydata/properties";
import PropertyDetail from "../component/PropertyDetail";

function Listing() {
    const navigate = useNavigate();
    return(
        <>
        <div className="flex flex-col items-center justify-center  h-screen bg-slate-950"> 
            <h1 className="text-4xl text-white font-bold underline">Listing Page</h1>
            <p className="mt-0.5 text-white text-2xl">Explore our listings of garages and parking spaces.</p>
             <Link to = "/homepage" className="mt-8 text-xl text-slate-950 hover:bg-cyan-600 hover:underline bg-cyan-500 p-2 rounded-2xl">
             Go to Home</Link>
        </div>
        <section className="bg-slate-950 p-6">
            <div className="mx-auto">
                <h2 className="flex justify-center mt-4 text-3xl text-white font-semibold underline">Available Listings</h2><br />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Listitems.map((item)=> (
                        <div key={item.id}  onClick={() => navigate(`/property/${item.id}`)} 
                        className="bg-slate-800/60 border border-slate-950 backdrop-blur-md rounded-lg shadow-md p-6 cursor-pointer">
                    <img src={item.image} alt={item.title} className="w-full h-50 object-cover mb-4" />
                    <h3 className="text-white text-xl font-sans font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-400 mb-4">{item.description}</p>
                    <p className="text-slate-400 font-bold">{item.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </>
    );
}
export default Listing;