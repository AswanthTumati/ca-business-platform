/**
 * Send a successful API response.
 *
 * @param {Object} res
 * @param {Number} statusCode
 * @param {String} message
 * @param {Object|Array|null} data
 */
function sendSuccess(res, statusCode = 200, message = "Success", data = null) {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
}

/**
 * Send an error API response.
 *
 * @param {Object} res
 * @param {Number} statusCode
 * @param {String} message
 * @param {Object|Array|null} errors
 */
function sendError(res, statusCode = 500, message = "Error", errors = null) {
  return res.status(statusCode).json({
    success: false,
    message,
    errors,
  });
}

module.exports = {
  sendSuccess,
  sendError,
};