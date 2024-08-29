const { ACCESS_TOKEN } = require("../configs/db");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");


// Autherizing the user
const auth = async (req, res,next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    // Check if the token exists
    try{

        if (!token) {
            return res.status(401).json({ message: "Unauthorized, login first." });
        }
        
        const validuser = await User.findOne({ token });
        // const token = req.cookies.token;
        if (!validuser) {
            return res.status(401).json({ message: "Unauthorized, login first." });
        }

    // Verify the token
    const ver = jwt.verify(token, ACCESS_TOKEN);
   
    const user  = await User.findById(ver.id).select("-password");
    if (!user) {
        res.status(401).json({ message: "User not found" });
    }

    // Set the user
    req.user = user;
    req.body.addedBy = user._id;
    next();
    }catch(err) {
        return res.status(403).json({ message: err.message });
    }
      
};

module.exports = auth;