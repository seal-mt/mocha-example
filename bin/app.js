'use strict';

const log = require('seal-log').getLogger();

const startRestApi = require('../lib/startRestApi');

const options = {
  port: 4000
};

log.info('Starting http service.');
startRestApi(options, (errStartApi) => {
  if (errStartApi) {
    return log.error('Error starting service.', { err: errStartApi });
  }
  log.info('Service successfully started.');
});
