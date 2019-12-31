# omni-loggers

  [![npm package](https://nodei.co/npm/omni-loggers.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/omni-loggers/)

  [![NPM Version][npm-image]][npm-url]
  [![NPM Downloads][downloads-image]][downloads-url]
  [![Maintenance][maintenance-img]][maintenance-url]

  [![Known Vulnerabilities][vulnerabilities-image]][vulnerabilities-url]
  [![GitHub issues][issues-open-image]][issues-open-url]
  [![GitHub forks][forks-image]][forks-url]
  [![GitHub stars][stars-image]][stars-url]

## How to use

```sh
yarn add omni-loggers
or
npm install --save omni-loggers
```


### Simple log and save on log/loggers.log

```js
const logger = require('omni-loggers');

logger.info('My info message here');
logger.info({message:'My info message here'});

logger.error('My error message here');
logger.error({message:'My error message here'});

logger.warn('My warn message here');
logger.warn({message:'My warn message here'});
```

## License

  [![npm](https://img.shields.io/npm/l/loggers.svg)](https://github.com/AndreOneti/omni-loggers/blob/master/LICENSE)


  [forks-image]: https://img.shields.io/github/forks/AndreOneti/omni-loggers.svg
  [forks-url]: https://github.com/AndreOneti/omni-loggers
  [downloads-image]: https://img.shields.io/npm/dt/omni-loggers.svg
  [downloads-url]: https://npmjs.org/package/omni-loggers
  [npm-image]: https://img.shields.io/npm/v/omni-loggers.svg
  [npm-url]: https://npmjs.org/package/omni-loggers
  [maintenance-img]: https://img.shields.io/badge/Maintained%3F-yes-green.svg
  [maintenance-url]: https://github.com/AndreOneti/omni-loggers

  [vulnerabilities-image]: https://snyk.io/test/github/AndreOneti/omni-loggers/badge.svg?targetFile=package.json
  [vulnerabilities-url]: https://snyk.io/test/github/AndreOneti/omni-loggers?targetFile=package.json
  [issues-open-image]: https://img.shields.io/github/issues/AndreOneti/omni-loggers.svg
  [issues-open-url]: https://github.com/AndreOneti/omni-loggers/issues?q=is%3Aopen+is%3Aissue

  [stars-image]: https://img.shields.io/github/stars/AndreOneti/omni-loggers.svg
  [stars-url]: https://github.com/AndreOneti/omni-loggers
