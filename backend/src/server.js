/*const app = require("./app");
const config = require("./config/env");
const pool = require("./database/connection");

async function startServer() {
  try {
    await pool.query("SELECT NOW()");

    console.log("Database connected successfully.");

    app.listen(config.port, () => {
      console.log(
        `Server running on port ${config.port} (${config.nodeEnv})`
      );
    });
  } catch (error) {
    console.error("Failed to connect to database.");
    console.error(error);

    process.exit(1);
  }
}

startServer();*/


/*
const app = require("./app");
const config = require("./config/env");
const pool = require("./database/connection");

async function startServer() {
  try {
    await pool.query("SELECT NOW()");

    console.log("Database connected successfully.");

    app.listen(config.port, () => {
      console.log(
        `Server running on port ${config.port} (${config.nodeEnv})`
      );
    });
  } catch (error) {
    console.error("Failed to connect to database.");
    console.error(error);
    process.exit(1);
  }
}

startServer();*/


const app = require("./app");
const config = require("./config/env");
const pool = require("./database/connection");
const logger = require("./utils/logger");
const appConfig = require("./config/app");

async function startServer() {
  try {
    await pool.query("SELECT NOW()");

    logger.info("Database connected successfully.");

    app.listen(config.port, () => {
      logger.info(
        `${appConfig.name} v${appConfig.version} started on port ${config.port} (${config.nodeEnv})`
    );
    });
  } catch (error) {
    logger.error(`Failed to connect to database: ${error.message}`);
    process.exit(1);
  }
}

startServer();