//structuring the serverFile

//1. dependencies
const express = require(`express`);

//2. instatiations
 const app = express();

//3. configurations 

//4. Middleware
 app.use(express.urlencoded({extended: true}));

//simple request time logger.
 app.use(`/about`, (req, res, next) => { //this one monitors the about route.
    console.log("A new request received at " + Date.now());
    next();  
 });
 app.use((req, res, next) => { // this one monitors ALL routes. 
    console.log("A new request received at " + Date.now());
 next();  
 });
 

 //5. routes
 app.get(`/`, (req, res)=>{ 
res.send(`Homepage! Hello world.`); 
 });

 
  //6. bootstrapping the server
  app.listen(3001, ()=> console.log(`listening on port 3001`)); 