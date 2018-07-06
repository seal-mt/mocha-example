'use strict';

const assert = require('assertthat');
const mockery = require('mockery');
const supertest = require('supertest');

suite('rest.postContent', () => {
  let getApp;
  let createError;

  suiteSetup((done) => {
    mockery.enable({
      useCleanCache: true,
      warnOnUnregistered: false
    });
    mockery.registerMock('../backend/createFile', (filename, data, callback) => {
      setImmediate(() => {
        callback(createError);
      });
    });
    getApp = require('../../lib/getApp');
    done();
  });

  suiteTeardown((done) => {
    mockery.deregisterAll();
    mockery.disable();
    done();
  });

  setup((done) => {
    createError = null;
    done();
  });

  test('returns 201 on success', (done) => {
    supertest(getApp()).post('/posttest1').send({ message: 'huhu' }).expect(201).end((err) => {
      assert.that(err).is.null();
      done();
    });
  });
});
