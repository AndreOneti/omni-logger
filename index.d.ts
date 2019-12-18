import logger = require('./lib/omni-logger');

/**
 * Log on te console te string like > [ 18/12/2019 - 03:53:33 ] - src\index.js:7 -> Teste de Log
 * @param {string} message Message to log on console
 * @param {string} [fileSave] File  to save log
 * @returns {void}
 */
declare function parallelLogger(message: string, fileSave?: string): void;
export = parallelLogger;
