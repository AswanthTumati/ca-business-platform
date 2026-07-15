const config = require("../config/env");
const { sendError } = require("../utils/apiResponse");
const logger = require("../utils/logger");
const { HTTP_STATUS } = require("../utils/constants");

function errorMiddleware(err, req, res, next) {
  logger.error(err.stack || err.message);

const statusCode =
  err.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR;
  const message =
    config.nodeEnv === "production"
      ? "Internal Server Error"
      : err.message;

  return sendError(res, statusCode, message);
}

module.exports = errorMiddleware;