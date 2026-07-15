const express = require("express");

const {
  contactValidationRules,
  validateRequest,
} = require("../validations/contact.validation");

const {
  submitContactEnquiry,
} = require("../controllers/contact.controller");

const router = express.Router();

/*
|--------------------------------------------------------------------------
| Contact Routes
|--------------------------------------------------------------------------
*/

router.post(
  "/contact",
  contactValidationRules,
  validateRequest,
  submitContactEnquiry
);

module.exports = router;