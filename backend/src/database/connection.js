
/*
const { Pool } = require("pg");
const config = require("../config/env");

const pool = new Pool({
  host: config.database.host,
  port: config.database.port,
  database: config.database.name,
  user: config.database.user,
  password: config.database.password,
});

module.exports = pool;*/

const { Pool } = require("pg");
const config = require("../config/env");

const pool = new Pool({
  host: config.database.host,
  port: config.database.port,
  database: config.database.name,
  user: config.database.user,
  password: config.database.password,

  ssl:
    config.nodeEnv === "production"
      ? {
          rejectUnauthorized: false,
        }
      : false,
});

module.exports = pool;