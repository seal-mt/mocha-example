'use strict';

const assert = require('assertthat');

const startRestApi = require('../lib/startRestApi');

suite('startRestApi', () => {
  test('is a function', (done) => {
    assert.that(startRestApi).is.ofType('function');
    done();
  });

  test('throws an error if options are missing', (done) => {
    assert.that(() => {
      startRestApi();
    }).is.throwing('Options are missing.');
    done();
  });
});
