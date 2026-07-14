import React from "react";
import { Link } from "react-router-dom";
import { Eye, Home , Users, Building2,ShieldCheck, User,HandHelping, Hand} from "lucide-react";

function About(){
    return( 
        <>
            <div className="bg-slate-950  py-10">
                <div className=" flex  justify-between items-center ">
                    <section className="bg-slate-950 px-40 mt-20 "> 
                      <div className="ml-10 gap-6 flex flex-col">
                      <h3 className="text-cyan-500 uppercase text-3xl  font-mono font-bold  ">who we are</h3>
                      <h1  className="uppercase text-7xl font-mono font-extrabold text-white ">about us</h1>
                      <div className="w-32 h-1 bg-cyan-500 mt-3"></div>
                      <p className="text-white  ">
                        We are passionate about helping people find more than just a property — we help them find a place to call home.</p>
                       <p className="text-white flex flex-row ">
                        <Home className="text-white w-10 h-10"/>
                        Trusted. Transparent. Client Focused.
                         That's the Real Estate experience.</p>
                      </div>
                      </section>
                       <img src="/images/ab1.jpg" alt="background" className="w-200 h-90 mt-20 rounded-lg object-cover" />
                </div>
            </div>
        
                
                <div className=" bg-cyan-700 py-6 px-20 ">
                   <div className="text-xl grid grid-cols-1 lg:grid-cols-3 gap-10 mt-4 items-center">
                     <section className=" bg-slate-800  text-white rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-black duration-150 transition-all ease-in-out p-2">
                       <div className="flex flex-row">
                       <h3 className="font-bold text-3xl font-mono uppercase flex flex-row gap-4">
                         <Users className="w-10 h-10"/>our mission</h3></div>
                       <p className="mt-3 text-justify">
                         To make real estate simple, transparent and accessible for everyone.
                          We aim to deliver exceptional service and help our clients make confident decisions.
                       </p>
                     </section>

                     <section className=" bg-slate-800  text-white rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-black duration-150 transition-all ease-in-out p-2">
                       <div className="flex flex-row">
                       <h3 className="font-bold text-3xl font-mono uppercase flex flex-row gap-4">
                         <Eye className="w-10 h-10"/>our vision</h3></div>
                       <p className="mt-3 text-justify">
                         To be the most trusted real estate platform, 
                         known for integrity, innovation and creating long-term value for our clients and communities.
                       </p>
                     </section>
                     
                     <section className="flex flex-row justify-end items-center">
                               <img
                                 src="/images/ab2.jpg"
                                 alt="ab2"
                                 className="w-100 h-50 object-cover rounded-lg"
                               />
                     </section>
                    </div>
                </div>


                <div className="bg-slate-950">
                    <div className="flex flex-row gap-6">

                        <section className="px-6 flex flex-col gap-3 ">
                            <h2 className="font-semibold text-2xl uppercase text-cyan-600 mt-2">why choose us</h2>
                            <h1 className="text-white text-3xl font-semibold font-sans">We put our clients first</h1>
                            <div className="bg-cyan-600 w-20 h-0.5"></div>
                            <p className="text-white text-justify ">With deep market knowledge,
                                 <br />modern technology and a client-first <br />approach,
                                 we make your real estate <br /> journey smooth
                                 and stress-free.</p>
                        </section>

                        <section className="text-white p-10 ml-20 mb-20">
                            <div className=" uppercase text-xs font-bold ">
                                <Building2 className=" w-10 h-10 ml-17 "/>
                                wide range of properties
                            </div>
                            <p className="text-xs">Residential, Commercial, Rent or Buy <br />— We have the best options for you.</p>
                        </section>

                        <section className="text-white py-10 ml-20">
                            <div className=" uppercase text-xs font-bold ">
                                <ShieldCheck className=" w-10 h-10 ml-17 "/>
                                trust & transparency
                            </div>
                            <p className="text-xs">Honest guidance and clear information <br /> at every step of the process.</p>
                        </section>

                        <section className="text-white py-10 ml-20">
                            <div className=" uppercase text-xs font-bold ">
                                <User className=" w-10 h-10 ml-17 "/>
                                expert team
                            </div>
                            <p className="text-xs">Our experienced agents are always here <br /> to help you find the perfect fit.</p>
                        </section>

                        <section className="text-white py-10 ml-20">
                            <div className=" uppercase text-xs font-bold  ">
                                <HandHelping className=" w-10 h-10 ml-17 "/>
                                complete support
                            </div>
                            <p className="text-xs">From property search to closing <br />the deal — we're with you all the way.</p>
                        </section>
                    </div>
                </div>                     
        </>
        );
    }
export default About;