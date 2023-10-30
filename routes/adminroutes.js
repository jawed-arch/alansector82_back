const router = require('express').Router()

const usercontroller= require("../controllers/usercontroller")


router.post("/adduser",usercontroller.adduser)
router.post("/getalluser",usercontroller.getalluser)

module.exports=router