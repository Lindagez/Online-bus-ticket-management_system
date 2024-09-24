const express = require("express");
const router = express.Router();
const auth = require("../Middleware/auth");
const roleMiddleware = require('../Middleware/rolemiddleware'); 
const {
  getUser,
  getUserById,
  registerUser,
  loginUser,
  logoutUser,
  stat,
  searchUser,
  updateUserPassword,
  deleteUser,
} = require("../controllers/user.controller");

// using the APIs
router.get('/admin', auth, roleMiddleware('admin'), (req, res) => {
  res.status(200).json({ message: 'Welcome Admin!' });
});
router.get('/buscompany', auth, roleMiddleware('busCompany'), (req, res) => {
  res.status(200).json({ message: 'Welcome Bus Company!' });
});
router.post("/logout", logoutUser);
router.get("/status", stat);
router.get("/search/users", searchUser);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", auth, getUser);
router.get("/:id", auth, getUserById);
router.put("/change/:id", auth, updateUserPassword);
router.delete("/delete/:id", auth, deleteUser);

module.exports = router;
