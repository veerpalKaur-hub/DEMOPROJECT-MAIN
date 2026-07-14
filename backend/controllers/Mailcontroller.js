import express from "express";

import dotenv from "dotenv";
import transporter from "../utility/Nodemailer.js";

dotenv.config();




export async function sendEmail(req, res) {
     console.log("Request received");
      console.log(req.body);

  try {
    const { to, subject, name, email, phone, message } = req.body;

    const info = await transporter.sendMail({
      from: `Real Estate Website <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
       Message:
       ${message}
       `,
    });

    console.log("Email sent:", info);

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.log("Email Error:", error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}