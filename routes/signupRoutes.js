const express = require('express');
const router = express.Router();

//the routing part
router.get("/signAgent", (req,res)=>{
  res.render("signup") //what is here is the name of your pug file
});

router.post("/signAgent", (req,res)=>{
    console.log(req.body)
  });

  module.exports = router;