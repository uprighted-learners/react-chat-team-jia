//-=+=- Helpful Note -=+=-
//make sure to have the correct "key":"valuepairs" in your postman object for registration  here:"firstName": "alex",
    // "lastName": "aubin",
    // "email": "a@gamil.com",
    // "password": "test"

//
const User = require('../models/userModel')
require('dotenv').config()
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SALT = process.env.SALT//uses enviroment variable assuming the salt rounds are set via .env

// POST - /api/register - register a new user
exports.registerNewUser = async (req, res) => {
  try {
    
       
      // const password = req.body.password
      const hashedPassword = await bcrypt.hash(req.body.password, 10);//not entirely sure if this works, but its supposed to hash/encrypt password and salt the passwords to prevent attacks
      const user = new User({//creates a new user object
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: hashedPassword,
        email: req.body.email,
        timestamp: Date.now(),
          // isAdmin: req.body.isAdmin,
     })
     
      const {firstName, lastName, email, password} = req.body
    if(!firstName || !lastName || !email || !password){
      throw new Error("please provide this info")//This is data validation telling user to these fiels are required to register
 
}
  if(password < 10){
      res.status(400).json({ message: "Please provide a password longer than 10 characters" });
      //This is data validation telling user to create a valid password
}
    const newUser = await user.save();//saves the user object to database
      res.status(201).json(newUser);//sends a status of 201 determining it worked
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: error.message });
    }//incase user fails to create
  };

  //A function to handle exports of this module
exports.loginUser = async (req, res) => { 
    const user = await User.findOne({ username: req.body.username });//finds the user object in database  
    res.status(200).json("Youre logged in successfully");
  if (!user) {//if user doesnt exist then send error status/message
      
      console.log("User Not found"); // Logging for debug
     return res.status(401).json({ message: "Invalid credentials" });
    }

 try {
  if (await bcrypt.compare(req.body.password, user.password)) {//comapre the correct values for passwords
            const accessToken = jwt.sign({ username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });//grants authentication if login goes smoothly
            res.status(200).json({ message: "Login successful", token: accessToken });//good status
  } else {
            console.log("Password does not match"); // Logging for debug
            res.status(401).json({ message: "Invalid credentials" });
        }//more data validation 
} catch (error) {
        console.error("Error during login", error); // More detailed error logging
        res.status(500).json({ message: "Server error during login" });
    }
}
//PUT /api/update/:username - update a user
exports.updateUser = async (req, res) => {
    try {
        // Find the user by username and update their information
        
    const foundUser = await User.find({id: req.params.id});
      if(!foundUser)throw Error("User does not exist");
      if(foundUser.isAdmin === false)throw Error("user does not have permission to update");//does not error right and might not even work properly
    const updatedUser = await User.findOneAndUpdate({id: req.params.id},   {firstName: req.body.firstName, lastName: req.body.lastName})
          
        res.status(200).json({message: 'User updated successfully'});
    } catch (error) {
        // If an error occurs during the update process, send an 500 response
        console.error("Error updating user:", error); // Logging for debug
        res.status(500).json({ message: "Internal server error" });
    }
  }

 exports.delete = async (req, res) => {
  try {
      // Find the user by username and update their information
      
  const foundUser = await User.find({id: req.params.id});
    if(!foundUser)throw Error("User does not exist");
    if(foundUser.isAdmin === false)throw Error("user does not have permission to update");//does not error right and might not even work properly
  const deletedUser = await User.findOneAndDelete(req.params.id)
        
      res.status(200).json({message: 'User deleted successfully'});
  } catch (error) {
      // If an error occurs during the update process, send an 500 response
      console.error("Error updating user:", error); // Logging for debug
      res.status(500).json({ message: "Internal server error" });
  }
}

