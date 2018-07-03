'use strict';

const assert = require('assertthat');

const getContent = require('../../lib/rest/getContent');

suite('postContent', () => {
  test('is a function', (done) => {
    assert.that(getContent).is.ofType('function');
    done();
  });
});
