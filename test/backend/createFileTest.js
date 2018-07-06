'use strict';

const fs = require('fs');
const path = require('path');

const assert = require('assertthat');

const createFile = require('../../lib/backend/createFile');

/* eslint-disable no-sync */
suite('backend.createFile', () => {
  setup((done) => {
    done();
  });

  test('is a function', (done) => {
    assert.that(createFile).is.ofType('function');
    done();
  });

  test('creates a file', (done) => {
    const fileName = path.join(__dirname, '..', 'data', 'testfile1');
    const data = { message: 'Hello World' };

    createFile(fileName, data, (errCreate) => {
      assert.that(errCreate).is.null();
      const check = fs.readFileSync(fileName, { encoding: 'utf8' });

      assert.that(check).is.equalTo(data);
      done();
    });
  });
});
