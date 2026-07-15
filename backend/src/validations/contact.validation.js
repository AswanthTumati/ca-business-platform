const { body, validationResult } = require("express-validator");
const { sendError } = require("../utils/apiResponse");
const { HTTP_STATUS } = require("../utils/constants");
/*
|--------------------------------------------------------------------------
| Contact Form Validation Rules
|--------------------------------------------------------------------------
*/

const contactValidationRules = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required.")
    .isLength({ min: 2, max: 100 })
    .withMessage("Name must be between 2 and 100 characters."),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required.")
    .isEmail()
    .withMessage("Please provide a valid email address.")
    .normalizeEmail(),

  body("phone")
    .trim()
    .notEmpty()
    .withMessage("Phone number is required.")
    .isLength({ min: 10, max: 20 })
    .withMessage("Phone number must be between 10 and 20 characters."),

  body("subject")
    .trim()
    .notEmpty()
    .withMessage("Subject is required.")
    .isLength({ min: 3, max: 255 })
    .withMessage("Subject must be between 3 and 255 characters."),

  body("message")
    .trim()
    .notEmpty()
    .withMessage("Message is required.")
    .isLength({ min: 10, max: 5000 })
    .withMessage("Message must be between 10 and 5000 characters."),
];

/*
|--------------------------------------------------------------------------
| Validation Result Handler
|--------------------------------------------------------------------------
*/

function validateRequest(req, res, next) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return sendError(
  res,
  HTTP_STATUS.BAD_REQUEST,
  "Validation failed.",
  errors.array().map((error) => ({
    field: error.path,
    message: error.msg,
  }))
);
  }

  next();
}

module.exports = {
  contactValidationRules,
  validateRequest,
};