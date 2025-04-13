const express = require('express');
const router = express.Router();
const connectEnsureLogin = require('connect-ensure-login'); //for permissions to perform certain actions.

//the routing part
const Product = require("../models/productSignup")
router.get("/addProduct", (req,res)=>{
  res.render("products")
});

router.post("/addProduct", async(req,res)=>{
  try{
    const product = new Product(req.body);
    await product.save();
    console.log(Product)
    res.redirect("/addProduct")
  }catch(error){
    res.status(400).render("products")
    console.log(error);
  } 
  });
// //getting information from the db.
  router.get("/getProducts", async(req,res)=>{ // this was an example
    try {
      let items = await Product.find();
      res.render('sales',{//the name of the pug file
      products:items //items is what we are getting from the db. 
      });
    } catch (error) {
      res.status(400).send('Unable to find items in the db.')
      
    }
  });
//update produce (remove type and placeholder from the pug file. find values you may not want updated and keep them that way.)

router.get("/updateProduct/:id", async(req,res)=>{
  try {
    const updateProduct = await Product.findOne({_id:req.params.id})
    res.render ("updateproduct",{product : updateProduct})
  } catch (error) {
    res.status(400).send('The item isnt available in the db.')
  }

});

router.post("/updateProduct" , async(req,res)=>{
  try {
    console.log("Updating product with ID:", req.body.id); // Debug log
   
    await Product.findOneAndUpdate({_id: req.body.id}, req.body , {new:true})
    res.redirect("/getProducts") //go to check out the updated list.
    console.log("New data:", req.body); // Debug log
    
  } catch (error) {
    res.status(400).send('unable to change item in the database')
  }
});

router.post("/deleteProduct", connectEnsureLogin.ensureLoggedIn() , async (req,res) => {
  try {
    console.log("Attempting to delete:", req.body.id); // Debug log
    await Product.deleteOne({ _id: req.body.id});
    res.redirect("back")
  } catch (error) {
    res.status(400).send("unable to delete product from the db.") 
  }
});
  module.exports = router;

  //connectEnsureLogin flag takes unlogged in users back to login so that they can allow them to do the action required. 