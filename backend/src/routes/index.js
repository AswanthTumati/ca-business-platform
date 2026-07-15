const express = require("express");

const healthRoutes = require("./health.routes");
const contactRoutes = require("./contact.routes");

const router = express.Router();

/*
|--------------------------------------------------------------------------
| Health Routes
|--------------------------------------------------------------------------
*/

router.use("/", healthRoutes);

/*
|--------------------------------------------------------------------------
| Contact Routes
|--------------------------------------------------------------------------
*/

router.use("/", contactRoutes);

module.exports = router;