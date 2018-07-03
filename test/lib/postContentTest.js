'use strict';

const assert = require('assertthat');

const postContent = require('../../lib/rest/postContent');

suite('postContent', () => {
  test('is a function', (done) => {
    assert.that(postContent).is.ofType('function');
    done();
  });
});
