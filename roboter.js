'use strict';

const roboter = require('roboter');

// dummy require to avoid an unused dependencies error
require('@sealsystems/eslint-config-es');

const tlsSubject = '/C=DE/ST=Bavaria/L=Hemhofen/CN=blue-king';
const cert = 'keys/cert.pem';
const key = 'keys/key.pem';

roboter.
  workOn('server').
  equipWith((task) => {
    task('universal/analyze', {
      src: ['**/*.js', '!node_modules/**/*.js', '!examples/**', '!coverage/**', '!temp/**', '!output/**'],
      rules: '.eslintrc'
    });
    task('universal/license', {
      disable: true
    });
    task('universal/test-units', {
      src: 'test/**/*Test.js'
    });
    task('universal/shell', {
      'generate-cert': `openssl req -subj "${tlsSubject}" -nodes -x509 -newkey rsa:2048 -keyout ${key} -out ${cert} -days 3650`,
      'show-cert': 'openssl x509 -in keys/cert.pem -text -noout'
    });
  }).
  start();
