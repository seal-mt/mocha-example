'use strict';

const fs = require('fs');

const failure = require('seal-failure');

const readFile = function (fileName, callback) {
  fs.access(fileName, fs.constants.F_OK, (errAccess) => {
    if (errAccess) {
      return callback(failure(404, 'File not found'));
    }
    fs.readFile(fileName, { encoding: 'utf8' }, (errRead, data) => {
      if (errRead) {
        return callback(failure(403, 'Error reading file', errRead));
      }
      callback(null, JSON.parse(data));
    });
  });
};

module.exports = readFile;
