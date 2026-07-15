const pool = require("../database/connection");

/**
 * Inserts a new enquiry into the database.
 *
 * @param {Object} enquiry
 * @returns {Object} Newly created enquiry
 */
async function createEnquiry(enquiry) {
  const query = `
    INSERT INTO enquiries
      (name, email, phone, subject, message)
    VALUES
      ($1, $2, $3, $4, $5)
    RETURNING id,
              name,
              email,
              phone,
              subject,
              message,
              created_at;
  `;

  const values = [
    enquiry.name,
    enquiry.email,
    enquiry.phone,
    enquiry.subject,
    enquiry.message,
  ];

  const result = await pool.query(query, values);

  return result.rows[0];
}

module.exports = {
  createEnquiry,
};