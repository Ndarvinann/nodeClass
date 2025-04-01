//1. dependencies
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

require("dotenv").config();

//2.instatiations--variables
const app = express();
const PORT = 3000;

//import routes
const productRoutes = require("./routes/productRoutes");
const signupRoutes = require("./routes/signupRoutes");
const { truncate } = require("fs/promises");

//3. configurations
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection //check for connection status in mongoose.
  .on("open", () => {
    console.log("Mongoose connection open");
  })
  .on("error", (err) => {
    console.log(`connection error: ${err.message}`);
  });
//set the view engine to pug
app.set("view engine", "pug"); // specify the new engine
app.set("views", path.join(__dirname, "views")); // specify the views directory.

//4. middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true })); //essential for processing form submissions

//5. routes
//using imported routes.
app.use("/", productRoutes);
app.use("/", signupRoutes); //nameof your route folder
//6.bootstrapping the server
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
