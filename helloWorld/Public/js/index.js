//1. dependencies

// //creating a server without using express

// //import the 'http' module
// const http =require('http');

// //create the server using "http.createServer()" method
// const server = http.createServer ((req,res)=>{
//     //the server's configuration starts here
//     // set the response header with a status code of 200(ok)
//     // and a content type of 'text/plain'
//     res.writeHead(200,{'content-Type' : 'text/plain' });
//     //send the response body with the text 'hello, Node js server!'
//     res.end('hello, node.js server');
//     // the servers response configuaration ends here
// });
// //define the port number the server will listen on
// const PORT = 3000;
// //start the server and listen on the specified port
// server.listen(PORT, ()=>{
//     console.log(`server is running on port ${PORT}`);
// });
//console.log(`Hello world! nodejs is working...`)

// configuring express to run. 
const express = require(`express`);
//instantiations
const app = express();
const path = require("path")
const port = 3000;

const studyRoutes = require("./routes/studyRoutes")
//middleware 
app.use(express.urlencoded({ extended: true }));//helps to parse data from the form.
app.use(express.static(path.join(__dirname, "public"))); //specifies a folder for static files
app.use(`/about`, (req, res, next) => { // this one monitors the about route
   console.log("A new request received at " + Date.now());
   next();
});

app.use((req, res, next) => { // this one monitors ALL routes. 
   console.log("A new request received at " + Date.now());
   next();
});
// app.listen(3000, ()=> console.log(`listening on port 3000`));

//routing instructions 
// const express = require(`express`);
// const app = express();
// app.get(`/`, (req, res)=>{ 
//  res.send(`Homepage! Hello world.`); //send response to the browser
// });
// //adding pages to the web app(/about) route
// app.get(`/about`, (req, res)=>{
//  res.send(`This is the 2025 cohot`);
// })
app.use("/", studyRoutes)
// app.post(`/users`,(req,res)=>{
//     res.send(`This is a post request`);
// });
// //this should be above the server listener
app.get('*', (req, res) => {
   res.send(`Oops!! page not found`);
});
// //path parameters
//     app.get(`/pathparams/:username`, function(req , res){
//         var username = req.params.username;
//         res.send(`my path param is  , ${username}`);
//         //get profile from database using the username
//     });// they tell the server which items to send back to the website for the user.

//     //querry strings--help to narrow down our search, they are optional. end with ?. 
//     app.get ("/dogs", (req, res)=>{
//         res.send( `This returns all dogs from the db`)
//     });
//  // for specifics
//  //dogs?brees=german&size=largecolor=black
//  app.get(`/dogs`, (req, res)=>{
//     res.send(`my query returns ${req.query.breed} and ${req.query.size} and ${req.query.color}`)
//  });

//app.get(`/index`, (req , res)=>{
//     res.sendFile(__dirname + `/index.html`);
//  });
// //gets information from the form file
//  app.get(`/quotes`, (req, res)=>{
//     res.sendFile(__dirname + `/index.html`);
//  });
//  //handls the transportation of data typed into the form
//  app.post(`/quotes`, (res, req)=>{
//     console.log(req.body)
//  });



app.listen(3000, () => console.log(`listening on port 3000`)); // always the last line in this file.