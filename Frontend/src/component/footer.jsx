import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone ,Mail, Key,  LocateFixed, HandCoins, PlugZap,Home, Warehouse, Info, Contact} from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter,FaLinkedin, FaLinkedinIn } from "react-icons/fa";

function Footer(){
    return (
        <footer className="bg-slate-900 " > 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 px-10 py-8">
            <section className="text-white ">
                <div  className="flex items-center">
                <img src="/images/logo.png" alt="logo" className="w-30 h-30" />
                <h2 className="text-3xl font-extrabold font-mono">Real <br /> Estate</h2>
                </div>
                <p className="text-lg font-mono flex flex-col mb-7">"Your journey home begins here."</p>
            </section>
            
           
                    {/*Navigation*/}
                <section className="bg-slate-800 p-5 rounded-2xl h-full text-white">
                    
                       <h2 className="uppercase text-2xl font-bold">Navigation</h2>
                       <ul>
                           <li className="text-xl font-semibold flex justify-center mt-2">
                               <Link href="/homepage"  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                               className="hover:underline hover:text-cyan-600">Home</Link>
                               </li>
                           <li className="text-xl font-semibold flex justify-center mt-2">
                               <Link href="/about"  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                               className="hover:underline hover:text-cyan-600">About</Link>
                           </li>
                           <li className="text-xl font-semibold flex justify-center mt-2">
                               <Link href="/contact"  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                               className="hover:underline hover:text-cyan-600">Contact</Link>
                           </li>
                           <li className="text-xl font-semibold flex justify-center mt-2">
                               <Link href="/listing"  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                               className="hover:underline hover:text-cyan-600">Listing</Link>
       
                           </li> 
                       </ul>
                    
                </section>

                {/*services section */}
              <section className="bg-slate-800 p-5 rounded-2xl h-full text-white">
                  
                     <h2 className="uppercase text-2xl font-bold flex justify-center">services</h2>
                     <ul>
                           <li className="text -xl font-semibold flex justify-center mt-2"> 
                               <Key className="w-4 h-4 inline-block mr-1 text-cyan-300 " />Rent Property</li>
                           <li className="text -xl font-semibold flex justify-center mt-2"> 
                               <HandCoins className="w-4 h-4 inline-block mr-1 text-cyan-300" />
                              Buy Property  
                           </li>
                           <li className="text -xl font-semibold flex justify-center mt-2"> 
                              <LocateFixed className="w-4 h-4 inline-block mr-1 text-cyan-300 " />
                              Nearby Properties 
                           </li>
                           <li className="text -xl font-semibold flex justify-center mt-2"> 
                              <PlugZap className="w-4 h-4 inline-block mr-1 text-cyan-300" />
                            EV Friendly Properties
                           </li> 
                       </ul>
                 
               </section>

               {/*Resources */}
               <section className="bg-slate-800 p-5 rounded-2xl h-full text-white">
                  
                     <h2 className="uppercase text-2xl font-bold flex justify-center">resources</h2>
                     <ul>
                           <li className="text -xl font-semibold flex justify-center mt-2"> 
                               Mortgage Calculator</li>
                           <li className="text -xl font-semibold flex justify-center mt-2"> 
                               Buying Guides  
                           </li>
                           <li className="text -xl font-semibold flex justify-center mt-2"> 
                              Selling Tips
                           </li>
                           <li className="text -xl font-semibold flex justify-center mt-2"> 
                              Market Trends
                           </li> 
                       </ul>
                 
               </section>
               
               <section className="bg-slate-800 p-5 rounded-2xl text-white h-full">
                    <h2 className="uppercase text-2xl font-bold flex justify-center mb-2"> 
                        <Contact className="w-7 h-7 inline-block mr-1 text-cyan-300 " />
                        contact</h2>
                    {/*phone */}
                  <h2>
                     <Phone className="w-4 h-4 text-cyan-300" /> <a href="tel:+919876543210" className="hover:text-cyan-300 transition">
                        +91 98765 43210</a>
                  </h2>
                  {/*Email */}
                  <h2>
                     <Mail className="w-4 h-4 text-cyan-300" /> <a href="Email:info@example.com" className="hover:text-cyan-300 transition">
                        info@example.com</a>
                  </h2>
                  {/*Location */}
                  <h2>
                     <LocateFixed className="w-4 h-4 text-cyan-300 " /> <a 
                     href="https://www.google.com/maps/place/Bengaluru,+Karnataka/@12.9687709,77.4288531,10.7z/data=
                     !4m6!3m5!1s0x3bae1670c9b44e6d:0xf8dfc3e8517e4fe0!8m2!3d12.9628957!4d77.57754!16zL20vMDljMTc?entr
                     y=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D" className="hover:text-cyan-300 transition">
                        Banglore</a>
                  </h2>
                
               </section>
            
        
        </div>  
        <div className="flex justify-center gap-6 py-6">
           <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="RealEstate Facebook" >
                <FaFacebook className="w-7 h-7 text-cyan-300" /></a>

            <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="RealEstate Facebook" >
                <FaInstagram className="w-7 h-7 text-cyan-300" /></a>
            
            <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="RealEstate Facebook" >
                <FaTwitter className="w-7 h-7 text-cyan-300" /></a>
            
            <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="RealEstate Facebook" >
                <FaLinkedinIn className="w-7 h-7 text-cyan-300" /></a>
            
        </div>     
                <div className="border-t border-slate-700 py-6 text-center text-white font-mono">
                         <p>© 2026 My Real Estate Project. All Rights Reserved.</p>
                         <p className="mt-2">
                             Contact: +91 98765 43210 | Email: info@example.com
                         </p>
                 </div>
        
        </footer>
    );
}
export default Footer;