'use strict';

const http = require('http');

const getApp = require('./getApp');

const startRestApi = function (options, callback) {
  if (!options) {
    throw new Error('Options are missing.');
  }
  if (!callback) {
    throw new Error('Callback is missing.');
  }

  const server = http.createServer(getApp());

  server.listen(options.port, (errListen) => {
    if (errListen) {
      return callback(errListen);
    }
    callback(null, server);
  });
};

module.exports = startRestApi;
