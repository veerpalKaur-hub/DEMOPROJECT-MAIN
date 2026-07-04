import React from "react";
import { Link } from "react-router-dom";
import { Mail, User , Phone, Tag, Pen,PhoneCall,Send } from "lucide-react";
 
function Contact(){
    return (
        <>
            < div className="relative">
                <img src="/images/con1.jpg" alt="back" className="h-140 w-full"/>
           

                    <div className="ml-15 absolute inset-0 flex flex-col  justify-center h-screen text-white text-left ">
                    <div>
                        <h2 className="uppercase font-semibold text-amber-600 text-2xl">get in touch</h2>
                        <h1 className="uppercase text-white font-bold text-5xl mt-2">contact us</h1>
                    </div>
                    
                    <div className="bg-amber-600 h-1 w-20 mt-3 "></div>
                      <p className="text-lg">We're here to help! Whether you have a question,
                        <br />need property advice, or want to schedule a visit,
                         <br />feel free to reach out to us.</p>
                    </div>
             </div>

            <div className="relative z-10 flex flex-row ">
                <div className="flex flex-col px-50 py-10">
                    <div className="bg-white w-120 h-full rounded-2xl shadow-black shadow-xs p-5">
                    <h2 className="text-blue-950 text-2xl font-bold ml-15 flex flex-row ">
                        <Mail className="text-amber-600 w-10 h-10 mr-5"/>Send Us a Message</h2>
                        <div className="bg-amber-600 h-1 w-20 ml-30 rounded-2xl mb-9"></div>
                        <div>
                            <form action="/submit" method="post">
                            <div className="flex flex-row  "> 
                                <div className="flex flex-row items-center justify-center border-2 border-gray-400 w-50 h-10 mt-3"  > 
                                         <User className="text-gray-400 "/>
                                      <input
                                         type="name"
                                         id="name"
                                         name="name"
                                         placeholder="Your Name"
                                          className="w-full h-full outline-none px-2"
                                       />
                                </div> 
                                       
                                <div className="flex flex-row items-center justify-center border-2 border-gray-400  w-50 h-10 ml-5 mt-3"  > 
                                       <Mail className="text-gray-400 "/>
                                     <input
                                       type="email"
                                       id="email"
                                       name="email"
                                       placeholder="Your Email"
                                        className="w-full h-full outline-none px-2"
                                     />
                                     </div>
                            </div>
                            <div className="flex flex-row  "> 
                                <div className="flex flex-row items-center justify-center border-2 border-gray-400 w-50 h-10 mt-3"  > 
                                         <Phone className="text-gray-400 "/>
                                      <input
                                         type="number"
                                         id="phone"
                                         name="phone"
                                         placeholder="Your phone number"
                                          className="w-full h-full outline-none px-2"
                                       />
                                </div> 
                                       
                                <div className="flex flex-row items-center justify-center border-2 border-gray-400  w-50 h-10 ml-5 mt-3"  > 
                                       <Tag className="text-gray-400 "/>
                                     <input
                                       type="text"
                                       id="subject"
                                       name="subject"
                                       placeholder="Subject"
                                        className="w-full h-full outline-none px-2"
                                     />
                                     </div>
                            </div>
                            <div className="flex flex-row border-2 border-gray-400  w-105 h-30  mt-3"  > 
                                       <Pen className="text-gray-400 "/>
                                     <textarea name="message" id="message" placeholder="your message"
                                      className="w-full h-full outline-none px-2"></textarea>
                                     </div>
                                     <button className="bg-slate-950 text-white w-105 h-11 p-3 mt-3 rounded-xl flex flex-row">
                                        <Send className="text-white ml-30"/>Send Message</button>
                                </form>
                        </div>

                        <div> 
                        </div>    
                    </div>
                </div>
                <div className="flex flex-col  py-10">
                    <div className="bg-white w-150 h-full rounded-2xl shadow-black shadow-xs p-5">
                        <h2 className="text-blue-950 text-2xl font-bold  flex flex-row ">
                        <PhoneCall className="text-amber-600 w-10 h-10 mr-5"/>Get in Touch
                        </h2>
                    <div className="flex flex-row justify-center items-start ">
                        <div className="mt-3">
                             <h2 className="flex flex-row gap-2 text-lg font-semibold ">
                            <Phone className="flex flex-row bg-amber-200 
                            w-8 h-8 rounded-3xl text-center items-center"/>Call Us
                            </h2>
                            <p>+1 (212) 555-0189 <br />
                            Mon - Fri, 9:00 AM - 6:00 PM</p>
    
                            <h2 className="flex flex-row gap-2 text-lg font-semibold mt-3 ">
                            <Mail className="flex flex-row bg-amber-200 
                            w-8 h-8 rounded-3xl text-center items-center"/>Email Us
                            </h2>
                            <p>info@example.com</p>
                            
                            <h2 className="flex flex-row gap-2 text-lg font-semibold mt-3 ">
                            <Phone className="flex flex-row bg-amber-200 
                            w-8 h-8 rounded-3xl text-center items-center"/>Working Hours
                            </h2>
                            <p>Monday - Friday: 9:00 AM - 6:00 PM
                             <br />Saturday: 10:00 AM - 4:00 PM
                             <br />Sunday: Closed</p>
                            
                        </div>
                        <div className=" flex flex-col items-center justify-end ml-10 rounded-lg shadow-black">
                                <div className="bg-slate-200 h-65 rounded-2xl ">
                                <img src="/images/con2.jpg" alt="in" className="w-42 h-40 rounded-2xl"/>
                                <p> "We don't just find <br />properties,
                                 we help you <br /> find a place
                                you'll love <br />to call home."</p>
                                </div>
                            </div>
                    </div>
                    </div>

                    
                </div>
            </div>
            
        </>
    );
}
export default Contact;