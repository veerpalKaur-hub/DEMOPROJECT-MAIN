import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./component/homepage";
import Navbar from "./component/navbar";
import About from "./component/about";
import Contact from "./component/contact";
import Footer from "./component/footer";
import Landingpage from "./component/landingpage";
import Listing from "./component/listing"
import PropertyDetail from "./component/PropertyDetail";

export default function App() {
  return (
      <Router>
        <Navbar/>
        <Routes>
          <Route path= "/" element = {<Landingpage />} />
          <Route path="/homepage" element = {<Homepage />} />
          <Route path="/about" element = {<About />} />
          <Route path="/contact" element = {<Contact />} />
          <Route path="/listing" element = {<Listing/>} />
          <Route path="/property/:id" element = {<PropertyDetail/>} />
          <Route
          path="*"
          element={
            <div className="h-screen flex items-center justify-center text-2xl">
              404 - Page Not Found
            </div>
          }
        />
        </Routes>
        <Footer/>
      </Router>
  );
}