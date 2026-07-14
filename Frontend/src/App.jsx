import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Client/homepage";
import Navbar from "./component/navbar";
import About from "./Client/about";
import Contact from "./Client/contact";
import Footer from "./component/footer";
import Landingpage from "./Client/landingpage";
import Listing from "./Client/listing"
import PropertyDetail from "./component/PropertyDetail";
import Property from "./Admin/newproperty";
import Rent from "./component/Rent";
import Login from "./Admin/login";
import Feedback from "./Admin/Feedback"

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
          <Route path="/property/:id" element = {<Rent/>} />
          <Route path="/login" element = {<Login/>} />
          <Route path="/newproperty" element = {<Property/>} />
          <Route path="/feedback" element = {<Feedback/>} />
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