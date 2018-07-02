'use strict';

const http = require('http');

const express = require('express');

const getFileContent = require('./getFileContent');

const startRestApi = function (options, callback) {
  if (!options) {
    throw new Error('Options are missing.');
  }
  if (!callback) {
    throw new Error('Callback is missing.');
  }
  const app = express();

  app.get('/*', getFileContent);

  const server = http.createServer(app);

  server.listen(options.port, (errListen) => {
    if (errListen) {
      return callback(errListen);
    }
    callback(null, server);
  });
};

module.exports = startRestApi;
