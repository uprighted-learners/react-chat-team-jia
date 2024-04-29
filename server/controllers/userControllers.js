const User = require('../models/userModel')//THIS DOCUMENT IS THE ONLY DOCUMENT THAT CREATES A USER OR HASHES A PASSWORD
//this is where handler functions go
//!should look something like this:

// const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
 

// POST - /api/register - register a new user
exports.registerNewUser = async (req, res) => {
    try {
    
       const SALT = process.env.SALT//uses enviroment variable assuming the salt rounds are set via .env
    
const {firstName, lastName, email, password} = req.body
if(!firstName || !lastName || !email || !password){
  res.status(400).json({ message: "Please provide a firstName, lastName, email, and password" });//This is data validation telling user to these fiels are required to register
  return;
}
       const hashedPassword = await bcrypt.hash(req.body.password, SALT);//not entirely sure if this works, but its supposed to hash/encrypt password and salt the passwords to prevent attacks
      const user = new User({//creates a new user object
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: hashedPassword,
        email: req.body.email,
        timestamp: Date.now(),
        // isAdmin: req.body.isAdmin,
       
      });
      const newUser = await user.save();//saves the user object to database
      res.status(201).json(newUser);//sends a status of 201 determining it worked
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: error.message });
    }//incase user fails to create
  };

// POST - /api/login - login a user
exports.loginUser = async (req, res) => { 
    const user = await User.findOne({ username: req.body.username });//finds the user object in database 
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
        const updatedUser = await User.findOneAndUpdate(
            { username: req.body.username }, // sends the username via a request to the body
            { $set: req.body }, // Update the user information with the request body
            { new: true } // Return the updated user document
        );
     
        // If the user is not found, send an error response
        if (!updatedUser) {
            console.log("User not found"); // Logging for debug
            return res.status(404).json({ message: "User not found" });
        }
        if(!req.body.isAdmin){
          console.log('admin perms required')
          res.status(404).json({message: 'admin rank is not their'})
                }
        // If the user is found and updated successfully, send a 200 response
        res.status(200).json(updatedUser);
    } catch (error) {
        // If an error occurs during the update process, send an 500 response
        console.error("Error updating user:", error); // Logging for debug
        res.status(500).json({ message: "Internal server error" });
    }
};


exports.delete = async (req, res) => { //our function to delete a resource
    try{
      const user = await User.findById(req.params.id);//user id is selected and deleted from database
      if (!user) {//checks if theirs not a valid user 
        console.log("User Not found"); // Logging for debug
        return res.status(404).json({ message: "Invalid credentials" });//sas their is no user with thoes credentials using the same user variable that directly relates to the schema object
      }
      await   User.findByIdAndDelete(req.params.id)//user id is selected and deleted from database
      res.status(200).json({message: "Okay account permanently deleted"})//sends a response of 200 if successful
    
    }catch(err){//sends a response of 500 if something went wrong
  res.status(500).json({ message: "internal server erorr"});
    }
   
 }