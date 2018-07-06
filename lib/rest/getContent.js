'use strict';

const path = require('path');

const failure = require('seal-failure');
const log = require('seal-log').getLogger();

const readFile = require('../backend/readFile');

const getContent = function (req, res) {
  const pathParam = req.params[0];
  const fullName = path.join(__dirname, '..', '..', 'data', pathParam);

  readFile(fullName, (errRead, data) => {
    if (errRead) {
      log.error(errRead.message, { url: req.url, hed: req.headers, metadata: errRead.metadata });

      return res.status(errRead.code).send(failure.httpExport(errRead));
    }
    res.status(200).send(data);
  });
};

module.exports = getContent;
