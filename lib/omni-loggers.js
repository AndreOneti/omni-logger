const path = require('path');
const { appendFile, mkdirSync } = require('fs');

/**
 * Log on te console te string like > [ 18/12/2019 - 03:53:33 ] - src\index.js:7 -> Teste de Log
 * @param {string} message Message to log on console
 * @param {string} [fileSave] File  to save log
 * @returns {void}
 */
module.exports = tracer;

function tracer(message, fileSave) {
  Error.prepareStackTrace = (_, stack) => stack;
  const err = new Error();
  Error.captureStackTrace(err, arguments.callee);
  const callee = err.stack[0];
  let relativePath = path.relative(process.cwd(), callee.getFileName());
  let log = formatDate(message, `${relativePath}:${callee.getLineNumber()}`);
  console.log(log);
  if (fileSave) {
    let localPath = path.resolve(fileSave).replace(/\\/g, '/');
    writeLogFile(log, localPath);
    // console.log(localPath);
  }
};

function formatDate(message, local) {
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
  return `> [ ${day}/${month}/${year} - ${hour}:${minute}:${second} ] - ${local} -> ${message}`;
}

async function writeLogFile(messageLog, filePath) {
  let strokedDir = filePath.split('/');
  let dir = strokedDir.slice(0, strokedDir.length - 1).join('/');

  mkdirSync(dir, { recursive: true }, (err) => {
    if (err) throw err;
    console.log('> File created');
  });

  appendFile(filePath, messageLog + '\n', function (err) {
    if (err) {
      throw err;
    }
  });
}
