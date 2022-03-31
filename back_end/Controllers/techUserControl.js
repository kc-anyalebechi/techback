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

// Create 

router.post("/", (req, res) => {
    const data = req.body 
    TechUser.create(data)
        .then((techUser) => res.json({
            status: 200,
            techUser: techUser
        }))
})

// Search by id. 
// Note we will want to search by location, user, expertise

router.get("/:id", (req, res) => {
    TechUser.findById(req.params.id)
        .then((techUser) => {
            res.json({
                status: 200,
                techUser: techUser,
            });
        });
  });
  
//   User can delete their profile
  router.delete("/:id", (req, res) => {
    TechUser.findByIdAndDelete(req.params.id)
        .then((techUser) => {
            res.json({
                status: 200,
                techUser: techUser,
            });
        });
  });
  
// user can upate their profile

  router.put("/:id", (req, res) => {
    TechUser.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((techUser) => {
            res.json({
                status: 200,
                techUser: techUser,
            });
        });
  });
  


module.exports = router;
