const express = require("express");
const { signupValidator, loginValidator } = require("../utils/validation/auth");

const {
  signup,
  login,
  forgotPassword,
  verifyPassResetCode,
  resetPassword,
} = require("../services/auth");

const router = express.Router();
// TODO: test auth routes
router.post("/signup", signup);
router.post("/login", login); //checked
router.post("/forgotPassword", forgotPassword); // checked
router.post("/verifyResetCode", verifyPassResetCode); // checked
router.put("/resetPassword", resetPassword); // checked

module.exports = router;
