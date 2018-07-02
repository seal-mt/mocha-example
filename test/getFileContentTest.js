'use strict';

const assert = require('assertthat');

const getFileContent = require('../lib/getFileContent');

suite('getFileContent', () => {
  test('is a function', (done) => {
    assert.that(getFileContent).is.ofType('function');
    done();
  });
});
