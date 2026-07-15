/*const { sendSuccess } = require("../utils/apiResponse");
const config = require("../config/env");
const appConfig = require("../config/app");

function healthCheck(req, res) {
  return sendSuccess(
    res,
    200,
    "Backend is healthy",
    {
      service: appConfig.name,
      version: appConfig.version,
      environment: config.nodeEnv,
      timestamp: new Date().toISOString(),
    }
  );
}

module.exports = {
  healthCheck,
};*/

const { sendSuccess } = require("../utils/apiResponse");
const { HTTP_STATUS } = require("../utils/constants");

const config = require("../config/env");
const appConfig = require("../config/app");

function healthCheck(req, res) {
  return sendSuccess(
    res,
    HTTP_STATUS.OK,
    "Backend is healthy",
    {
      service: appConfig.name,

      version: appConfig.version,

      environment: config.nodeEnv,

      timestamp: new Date().toISOString(),
    }
  );
}

module.exports = {
  healthCheck,
};