//1. dependencies
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const passport = require("passport");
const moment = require("moment")
const expressSession = require("express-session")({
  secret:"secret",
  resave : false,
  saveUninitialized : false,
});
//import user's model
const Signup = require('./models/agentSignup')
const productReg = require('./models/productSignup')
require("dotenv").config();

//2.instatiations--variables
const app = express();
const PORT = 3000;
app.use(express.json()); // Add this line


//import routes
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");
const salesAgentRoutes = require("./routes/salesAgentRoutes");
const directorRoute = require("./routes/directorRoute");

const { truncate } = require("fs/promises");



//3. configurations
mongoose.connect(process.env.DATABASE, {
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
app.locals.moment = moment;
mongoose.connect(process.env.DATABASE,{
  useNewUrlParser : true,
  useUnifiedTopology: true
});
//4. middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));//essential for processing form submissions

//passport configs
passport.use(Signup.createStrategy());
passport.serializeUser(Signup.serializeUser()); // a user is assigned a serial number to user sessions. cookies. 
passport.deserializeUser(Signup.deserializeUser());
//passport.use(productReg.createStrategy());

//express session configs
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());


//5. routes
//using imported routes.
app.use("/" , authRoutes);
app.use("/", productRoutes); //nameof your route folder
app.use("/", directorRoute);
app.use("/", salesAgentRoutes);
//6.bootstrapping the server
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
