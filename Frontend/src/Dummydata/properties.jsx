import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Clock, Warehouse, Zap, X, Lock, Wrench, Fan, MapPin,HomeIcon, Lightbulb, Dumbbell, Rose, CircleParking } from "lucide-react";

export const Listitems = [
    {
    id: 1,
    title: "Home Town",
    description: "Secure space available in the heart of the city.",
    price: "$150/month",
    image: "/images/home1.jpg",
    Amenities : [ 
        {label : "CCTV Coverage", icon : ShieldCheck},
        {label : "Gym", icon : Dumbbell},
        {label : "Garden", icon : Rose},
        {label : "Parking", icon : CircleParking},
        {label : "Power backup", icon : Zap},
        {label : "Ventilated", icon : Fan},
    ]
},
{
    id: 2,
    title: "Sub-Urban",
    description: "Spacious  in a quiet neighborhood.",
    price: "$190/month",
    image: "/images/home2.jpg",
     Amenities : [ 
        {label : "CCTV Coverage", icon : ShieldCheck},
        {label : "Gym", icon : Dumbbell},
        {label : "Garden", icon : Rose},
        {label : "Parking", icon : CircleParking},
        {label : "Power backup", icon : Zap},
        {label : "Ventilated", icon : Fan},
    ],
    
},
{
    id: 3,
    title: "City-Centre",
    description: "Convenient parking spot near downtown.",
    price: "$200/month",
    image: "/images/home3.jpg",
     Amenities : [ 
        {label : "CCTV Coverage", icon : ShieldCheck},
        {label : "Gym", icon : Dumbbell},
        {label : "Garden", icon : Rose},
        {label : "Parking", icon : CircleParking},
        {label : "Power backup", icon : Zap},
        {label : "Ventilated", icon : Fan},
    ]
},
]