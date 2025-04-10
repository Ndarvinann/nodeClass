const express = require('express');
const router = express.Router();
const passport = require('passport')
//import models
const Signup = require('../models/agentSignup')
//the routing part
router.get("/signup", (req,res)=>{
  res.render("signup") //what is here is the name of your pug file
});

router.post("/signup", async(req,res)=>{
    //console.log(req.body) we have a db, we dont need a console.
    try{
      const user = new Signup(req.body
      );
      let existingUser = await Signup.findOne({ //is the email coming it similar to the one we have in the db?
        email:req.body.email //if yes, this already exists.
      });
      if(existingUser){
        return res.status(400).send("Email already in use")
      } else{
        await Signup. register(user , req.body.password, (error)=>{
          if(error){
            throw error;
          }
          res.redirect("/login")
        });
      }
      console .log(user)  
    } catch (error){
      res.status(400).render('signup')
      console.log(error)
    }
  });

router.get("/login" , (req,res)=>{
    res.render("login")
 });

  
//on using passport, 
//redirect this user back to the login form if their credentials dont match with any we have in the system.
router.post("/login", passport.authenticate("local",
  {failureRedirect: "/login"}), (req,res)=>{
    console.log('Login route hit');
  console.log(req.body);
  req.session.user = req.user; //session user should be already a user.
  if (req.user.role === "director"){
    return res.redirect("/directorDash")

  }else if(req.user.role === "sales"){
return res.redirect("/sales")
  }else{
    res.send("Please check your user name and password")
  }
});

//logout 
router.get("/logout", (req,res)=>{
  if(req.session){
    req.session.destroy((error)=>{
      if(error){
        return res.status(500).send(error , "Error logging out")
      }
      res.redirect("/login") //the /login is the route to take when the logout button is pressed. its linked the way we link pages(anchortag), a(href = '/login') instead of the links from the pages. 
    })

  }
});

module.exports = router;