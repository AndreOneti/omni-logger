const path = require('path');
const { appendFile, mkdirSync, existsSync } = require('fs');

/**
 * Log on te console te string like > [ 18/12/2019 - 03:53:33 ] - src\index.js:7 -> Teste de Log
 * @param {string|object} message Message to log on console
 * @param {boolean} [fileSave] File  to save log
 * @returns {void}
 */
module.exports = {
  info,
  warn,
  error
};

/**
 * Log on te console te string like > [ 18/12/2019 - 03:53:33 - warn ] - src\index.js:7 -> Teste de Log
 * @param {string|object} message Message to log on console
 * @returns {void}
 */
function warn(message) {
  if (typeof message === "object") {
    message = JSON.stringify(message);
  }
  Error.prepareStackTrace = (_, stack) => stack;
  const err = new Error();
  Error.captureStackTrace(err, arguments.callee);
  const callee = err.stack[0];
  let relativePath = path.relative(process.cwd(), callee.getFileName());
  let log = formatDate(message, `${relativePath}:${callee.getLineNumber()}`, 'warn');
  console.log(log);
  let localPath = path.resolve('log/loggers.log').replace(/\\/g, '/');
  writeLogFile(log, localPath);
}

/**
 * Log on te console te string like > [ 18/12/2019 - 03:53:33 - info ] - src\index.js:7 -> Teste de Log
 * @param {string|object} message Message to log on console
 * @returns {void}
 */
function info(message) {
  if (typeof message === "object") {
    message = JSON.stringify(message);
  }
  Error.prepareStackTrace = (_, stack) => stack;
  const err = new Error();
  Error.captureStackTrace(err, arguments.callee);
  const callee = err.stack[0];
  let relativePath = path.relative(process.cwd(), callee.getFileName());
  let log = formatDate(message, `${relativePath}:${callee.getLineNumber()}`, 'info');
  console.log(log);
  let localPath = path.resolve('log/loggers.log').replace(/\\/g, '/');
  writeLogFile(log, localPath);
}

/**
 * Log on te console te string like > [ 18/12/2019 - 03:53:33 - error ] - src\index.js:7 -> Teste de Log
 * @param {string|object} message Message to log on console
 * @returns {void}
 */
function error(message) {
  if (typeof message === "object") {
    message = JSON.stringify(message);
  }
  Error.prepareStackTrace = (_, stack) => stack;
  const err = new Error();
  Error.captureStackTrace(err, arguments.callee);
  const callee = err.stack[0];
  let relativePath = path.relative(process.cwd(), callee.getFileName());
  let log = formatDate(message, `${relativePath}:${callee.getLineNumber()}`, 'error');
  console.log(log);
  let localPath = path.resolve('log/loggers.log').replace(/\\/g, '/');
  writeLogFile(log, localPath);
}

function formatDate(message, local, logType) {
  let data = new Date().toISOString();
  let date = data.split('T')[0];
  let time = data.split('T')[1];
  // Day separator
  let month = date.slice(5, 7);
  let day = date.slice(8, 10);
  let year = date.slice(0, 4);
  // Time separator
  let hour = time.split(':')[0];
  let minute = time.split(':')[1];
  let second = time.split(':')[2].split('.')[0];
  return `> [ ${day}/${month}/${year} - ${hour}:${minute}:${second} - ${logType} ] - ${local} -> ${message}`;
}

async function writeLogFile(messageLog, filePath) {
  let strokedDir = filePath.split('/');
  let dir = strokedDir.slice(0, strokedDir.length - 1).join('/');

  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true }, (err) => {
      if (err) throw err;
      console.log('> File created');
    });
  }

  appendFile(filePath, messageLog + '\n', function (err) {
    if (err) {
      throw err;
    }
  });
}
