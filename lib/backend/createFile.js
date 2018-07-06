'use strict';

const fs = require('fs');

const failure = require('seal-failure');

const createFile = function (fileName, data, callback) {
  fs.access(fileName, fs.constants.F_OK, (errAccess) => {
    if (!errAccess) {
      return callback(failure(409, 'File already exists'));
    }
    fs.writeFile(fileName, data, { encoding: 'utf8' }, (errWrite) => {
      if (errWrite) {
        return callback(failure(403, 'Error writing object', errWrite));
      }
      callback(null);
    });
  });
};

module.exports = createFile;
