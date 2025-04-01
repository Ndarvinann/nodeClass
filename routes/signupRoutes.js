const express = require('express');
const router = express.Router();
//import models
const Signup = require('../models/agentSignup')
//the routing part
router.get("/signup", (req,res)=>{
  res.render("signup") //what is here is the name of your pug file
});

router.post("/signup", (req,res)=>{
    //console.log(req.body) we have a db, we dont need a console.
    try{
      const user = new Signup(req.body
      );
        user.save();
        res.redirect('/signup');
    } catch (error){
      res.status(400).render('signup')
      console.log(error)
    }

  });

  module.exports = router;