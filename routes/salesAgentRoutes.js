const express = require('express');
const router = express.Router();

router.get("/sale", (req,res)=>{
    res.render('salesDash')
});
router.post("/sale",(req,res)=>{
    res.render("salesDash")
})
module.exports = router;