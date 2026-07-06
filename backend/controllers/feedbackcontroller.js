import feedback from "../models/feedback.js"
import mongoose from "mongoose"

export async function addFeedback(req,res){
 const {name,email,rating,comment} = req.body;
  
 await feedback.create({name,email,rating,comment})
.then((feedback)=>{
        res.status(201).json({message:"feedback added successfully",feedback});
    })
    .catch((error) => {
            res.status(500).json({ message: "Error adding feedback", error });
        });
}
export async function deleteFeedback(req,res){
 const {id} = req.params;
  
 await feedback.findByIdAndDelete(id)
.then((feedback)=>{
        res.status(201).json({message:"feedback deleted successfully",feedback});
    })
    .catch((error) => {
            res.status(500).json({ message: "Error deleting feedback", error });
        });
}
export async function getallfeedbacks(req,res){
 await feedback.find()
.then((feedback)=>{
        res.status(201).json({message:"feedbacks retrieved  successfully",feedback});
    })
    .catch((error) => {
            res.status(500).json({ message: "Error retrievinf feedbacks", error });
        });
}

export async function updatefeedback(req,res){
 const {id} = req.params;
 const{rating,comment} = req.body;

 await feedback.findByIdAndUpdate(id,{rating,comment})
.then((feedback)=>{
        res.status(201).json({message:"feedback updated successfully",feedback});
    })
    .catch((error) => {
            res.status(500).json({ message: "Error updating feedback", error });
        });
}
