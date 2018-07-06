'use strict';

const path = require('path');

const failure = require('seal-failure');
const log = require('seal-log').getLogger();

const createFile = require('../backend/createFile');

const postContent = function (req, res) {
  const pathParam = req.params[0];
  const fullName = path.join(__dirname, '..', '..', 'data', pathParam);

  createFile(fullName, req.body, (errCreate) => {
    if (errCreate) {
      log.error(errCreate.message, { url: req.url, hed: req.headers, metadata: errCreate.metadata });

      return res.status(errCreate.code).send(failure.httpExport(errCreate));
    }
    res.sendStatus(201);
  });
};

module.exports = postContent;
