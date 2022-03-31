const express = require("express");
const TechUser = require("./../Models/TechUser")
const router = express.Router();

// *********************
// READ ALL TECH USERS 
// ********************

router.get("/", (req, res) => {
    TechUser.find({})
        .then((techUsers => res.json({
            status: 200,
            techUsers: techUsers
        })))
})


module.exports = router;
