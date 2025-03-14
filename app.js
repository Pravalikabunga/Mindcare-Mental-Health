const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/users");
const errorHandler = require("./middlewares/errorHandler");
const app = express();
const cors = require("cors");

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:8081', // Your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  credentials: true, // Allow credentials (e.g., cookies)
};
app.use(cors(corsOptions));

//! Connect to mongodb
mongoose
  .connect("mongodb+srv://bungapravalika07:Pravalika%402021@cluster0.d7mrm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0") 
  .then(() => console.log("Db connected successfully"))
  .catch((e) => console.log(e));

//! Middlewares
app.use(express.json()); //pass incoming json data from the user
//!Routes
app.use("/", router);
//!error handler
app.use(errorHandler);
//! Start the server
const PORT = 8000;
app.listen(PORT, console.log(`Server is up and running`));
