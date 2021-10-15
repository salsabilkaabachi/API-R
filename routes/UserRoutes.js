const express = require("express");
const { findByIdAndRemove, findByIdAndDelete } = require("../models/Usermodel");
const Usermodel = require("../models/Usermodel");
const router = express.Router();

//Add a new user
router.post("/ADD", async (req, res) => {
  const { name, lastname, email, phone } = req.body;
  //creation de users
  const newuser = new Usermodel({
    name,
    lastname,
    email,
    phone,
  });

  try {
    //save
    let user = await newuser.save();
    res.send(user);
  } catch (error) {
    console.log(error);
  }
});

//Get All users
router.get("/GET-ALL-USERS", (req, res) => {
  Usermodel.find({}, (err, Usermodel) => {
    res.send(Usermodel);
  });
});

//Get one user
router.get("/GET-ONE-USER/:id", async (req, res) => {
  const id = req.params.id;

  try {
    let fetchedUser = await Usermodel.findById(id);
    console.log(fetchedUser);

    res.send(fetchedUser);
  } catch (error) {
    res.status(500).send({ message: "not found" });
  }
});
// Edit user
router.put("/PUT/:id", async (req, res) => {
  const id = req.params.id;
  try {
    let editUser = await Usermodel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.send(editUser);
  } catch (error) {
    console.log(error);
  }
});

// Delete user by id
router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    let deleteUser = await Usermodel.findByIdAndDelete(id);
    res.send(deleteUser);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;