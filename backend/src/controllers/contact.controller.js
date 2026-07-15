const contactService = require("../services/contact.service");
const asyncHandler = require("../utils/asyncHandler");
const { sendSuccess } = require("../utils/apiResponse");
const { HTTP_STATUS } = require("../utils/constants");

const submitContactEnquiry = asyncHandler(async (req, res) => {
  const savedEnquiry =
    await contactService.createContactEnquiry(req.body);

  return sendSuccess(
  res,
  HTTP_STATUS.CREATED,
  "Enquiry submitted successfully.",
  savedEnquiry
);
});

module.exports = {
  submitContactEnquiry,
};