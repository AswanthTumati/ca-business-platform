const { sendError } = require("../utils/apiResponse");
const { HTTP_STATUS } = require("../utils/constants");

function notFoundMiddleware(req, res) {
  return sendError(
  res,
  HTTP_STATUS.NOT_FOUND,
  `Route '${req.originalUrl}' not found.`
);
}

module.exports = notFoundMiddleware;