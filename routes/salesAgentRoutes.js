const express = require('express');
const router = express.Router();

router.get("/sales", (req,res)=>{
    res.render('salesDash')
});
module.exports = router;