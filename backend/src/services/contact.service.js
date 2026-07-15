const enquiryModel = require("../models/enquiry.model");
const emailService = require("./email.service");
const logger = require("../utils/logger");

async function createContactEnquiry(enquiryData) {
  const savedEnquiry =
    await enquiryModel.createEnquiry(enquiryData);

  try {
  await emailService.sendContactNotification(savedEnquiry);

  logger.info(
    `Email notification sent successfully for enquiry ID ${savedEnquiry.id}`
  );
} catch (error) {
  logger.error(
    `Email notification failed for enquiry ID ${savedEnquiry.id}: ${error.message}`
  );
}

  return savedEnquiry;
}

module.exports = {
  createContactEnquiry,
};