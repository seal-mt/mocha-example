'use strict';

const fs = require('fs');
const path = require('path');

const mkdirp = require('mkdirp');

const log = require('seal-log').getLogger();

const postContent = function (req, res) {
  const pathParam = req.params[0];
  const fullName = path.join(__dirname, '..', '..', 'data', pathParam);
  const dirName = path.dirname(fullName);

  fs.access(fullName, fs.constants.F_OK, (errAccess) => {
    if (!errAccess) {
      log.error('File already exists', { url: req.url, hed: req.headers });

      return res.sendStatus(409);
    }

    mkdirp(dirName, (errMkdir) => {
      if (errMkdir) {
        log.error('Error creating path', errMkdir);

        return res.sendStatus(403);
      }
      const writeStream = fs.createWriteStream(fullName);

      writeStream.end(JSON.stringify(req.body, null, 2), 'utf8', (errWrite) => {
        if (errWrite) {
          log.error('Error writing object', errWrite);

          return res.sendStatus(403);
        }
        res.sendStatus(201);
      });
    });
  });
};

module.exports = postContent;
