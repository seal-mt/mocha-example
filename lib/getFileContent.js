'use strict';

const fs = require('fs');
const path = require('path');

const log = require('seal-log').getLogger();

const getFileContent = function (req, res) {
  const pathParam = req.params[0];
  let fileName = path.join(__dirname, '..', 'www-data', pathParam);

  fs.stat(fileName, (errStat, fileStat) => {
    if (errStat) {
      log.error('Not found', { url: req.url, hed: req.headers });

      return res.sendStatus(404);
    }
    if (fileStat.isDirectory()) {
      fileName = path.join(fileName, 'index.html');
    }
    fs.access(fileName, fs.constants.R_OK, (errAccess) => {
      if (errAccess) {
        log.error('No access.', { url: req.url, hed: req.headers });

        return res.sendStatus(403);
      }
      fs.createReadStream(fileName).pipe(res);
    });
  });
};

module.exports = getFileContent;
