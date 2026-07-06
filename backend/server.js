import express from "express";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import userSchema from "./models/Users.js";
import feedbackschema from "./models/feedback.js";
import mongoose from "mongoose";
import feedback from "./models/feedback.js";
import { addUser, getAllUsers,updateUser,deleteUser} from "./controllers/userController.js"
import { addFeedback, deleteFeedback, getallfeedbacks ,updatefeedback} from "./controllers/feedbackcontroller.js"

dotenv.config();

connectDB();

const app = express();



app.use(express.json());



app.get("/", (req, res) => {
  res.send("Property Hub API Running");
  console.log("Property Hub API Running");
});

app.post("/test", (req, res) => {
  const { name, email, password } = req.body;
  console.log("Received data:", { name, email, password });
    
 
  res.status(200).json({ message: "Data received successfully", data: { name, email, password } });
});


app.post("/adduser",addUser);
app.get("/getAllUsers",getAllUsers);

app.post("/addfeedback",addFeedback);
app.delete("/deletefeedback/:id",deleteFeedback);
app.get("/getallfeedbacks",getallfeedbacks);
app.put("/updatefeedback/:id",updatefeedback);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
