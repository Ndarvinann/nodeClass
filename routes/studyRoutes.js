const express = require("express");
const router = express.router();
const path = require("path")
router.get("/", (req, res) => {
   res.send("Homepage! Hello world.");
});
// get the routing things
// change all the `app.` to router. 
router.get('/about', (req, res) => {
});

router.get('/about', (req, res) => {
   res.send("This is the 2025 cohot");
});

router.post('/users', (req, res) => {
   res.send("This is a post request");
});

router.get('/pathparams/:username', (req, res) => {
   var username = req.params.username;
   res.send("my path param is  , ${username}");
});

router.get("/dogs", (req, res) => {
   res.send("This returns all dogs from the db");
});

router.get('/dogs', (req, res) => {
   res.send("my query returns ${req.query.breed} and ${req.query.size} and ${req.query.color}")
});

router.get('/index', (req, res) => {
   res.sendFile(__dirname + '../views/index.html');
});

router.get('/quotes', (req, res) => {
   res.sendFile(__dirname + '../views/signup.html');
});

router.post('/quotes', (res, req) => {
   console.log(req.body)
});
module.exports = router; //this line exposes these routes to the system.(think, client hasnt paid, come delete this line and chill.)