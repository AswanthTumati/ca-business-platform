require("dotenv").config();

module.exports = {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || "development",

  api: {
    prefix: "/api/v1",
  },
  database: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },

  email: {
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: process.env.EMAIL_SECURE === "true",
  user: process.env.EMAIL_USER,
  password: process.env.EMAIL_PASS,
  from: process.env.EMAIL_FROM,
  to: process.env.EMAIL_TO,
},
};