const transporter = require("../config/mail");
const config = require("../config/env");

const {
  buildContactNotificationTemplate,
} = require("../templates/contactNotification.template");

async function sendContactNotification(enquiry) {
  const mailOptions = {
    from: config.email.from,
    to: config.email.to,
    subject: `New Contact Enquiry: ${enquiry.subject}`,
    html: buildContactNotificationTemplate(enquiry),
  };

  return transporter.sendMail(mailOptions);
}

module.exports = {
  sendContactNotification,
};