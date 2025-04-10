const express = require('express');
const router = express.Router();

router.get("/directorDash", (req,res)=>{
    res.render('directorDashBoard')
});
module.exports = router;