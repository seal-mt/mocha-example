'use strict';

const bodyParser = require('body-parser');
const express = require('express');

const postContent = require('./rest/postContent');
const getContent = require('./rest/getContent');

const getApp = function () {
  const app = express();

  app.use(bodyParser.json({
    limit: '10mb'
  }));

  app.post('/*', postContent);
  app.get('/*', getContent);

  return app;
};

module.exports = getApp;
