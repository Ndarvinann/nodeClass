//1. dependencies
const express = require('express');
const path = require('path');


//2.instatiations--variables
const app = express();
const PORT = 3001;


//3. configurations 
//set the view engine to pug
app.set("view engine", "pug"); // specify the new engine
app.set("views", path.join(__dirname, "views"));// specify the views directory.

//4. middleware 
//5. routes
//6.bootstrapping the server
app.listen(p)