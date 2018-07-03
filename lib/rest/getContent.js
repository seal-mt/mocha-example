'use strict';

const fs = require('fs');
const path = require('path');

const log = require('seal-log').getLogger();

const getContent = function (req, res) {
  const pathParam = req.params[0];
  const fullName = path.join(__dirname, '..', '..', 'data', pathParam);

  fs.access(fullName, fs.constants.F_OK, (errAccess) => {
    if (errAccess) {
      log.error('File not found', { url: req.url, hed: req.headers });

      return res.sendStatus(404);
    }
    fs.readFile(fullName, { encoding: 'utf8' }, (errRead, data) => {
      if (errRead) {
        log.error('Error reading file', { url: req.url, hed: req.headers });

        return res.sendStatus(403);
      }
      res.status(200).send(JSON.parse(data));
    });
  });
};

module.exports = getContent;
