const express = require('express');
const router = express.Router();

//the routing part
router.get("/addProduct", (req,res)=>{
  res.render("products")
});

router.post("/addProduct", (req,res)=>{
    console.log(req.body)
    res.redirect("/addProduct")
  });

  router.get("/getProducts", (req,res)=>{ // this was an example
    res.send('This is a list of products')
  })

  module.exports = router;