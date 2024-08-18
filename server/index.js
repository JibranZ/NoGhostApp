const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./Routes/userRoute");

const app = express();

// middleware
require("dotenv").config();
app.use(express.json());
app.use(cors());

// Route middleware
app.use("/api/users", userRoute);

app.get("/", (req, res) => {
  res.send("Welcome to our chat app API");
});

const port = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// CONNECTING TO DB
mongoose
  .connect(uri)
  .then(() => {
    console.log("MongoDB connection established");
  })
  .catch((err) => console.log(err));
