import logger = require('./lib/omni-loggers');

/**
 * Log on te console te string like > [ 18/12/2019 - 03:53:33 - info ] - src\index.js:7 -> Teste de Log
 * @param {string|object} message Message to log on console
 * @returns {void}
 */
declare function info(message: string | object): void;

/**
 * Log on te console te string like > [ 18/12/2019 - 03:53:33 - warn ] - src\index.js:7 -> Teste de Log
 * @param {string|object} message Message to log on console
 * @returns {void}
 */
declare function warn(message: string | object): void;

/**
 * Log on te console te string like > [ 18/12/2019 - 03:53:33 - error ] - src\index.js:7 -> Teste de Log
 * @param {string|object} message Message to log on console
 * @returns {void}
 */
declare function error(message: string | object): void;
export = {
  info,
  warn,
  error
};
