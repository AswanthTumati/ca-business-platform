function getTimestamp() {
  return new Date().toISOString();
}

function info(message) {
  console.log(`[${getTimestamp()}] [INFO] ${message}`);
}

function warn(message) {
  console.warn(`[${getTimestamp()}] [WARN] ${message}`);
}

function error(message) {
  console.error(`[${getTimestamp()}] [ERROR] ${message}`);
}

module.exports = {
  info,
  warn,
  error,
};