'use strict';

var mocha  = require('mocha');
var expect = require('chai').expect;
var relayable = require('../index');

var client = new relayable({
  linkId: '07d2e8d9-86f9-486d-954a-7f3d9fd9dd15'
});

describe('relayable', function () {
  it('can dispatch a message', function (done) {
    this.timeout(15000);
    client.dispatch('relayable can dispatch a message', 'relayable.js_unit_tests')
    .then(function (response) {
      expect(response.reason).to.equal('MessageScheduled');
      done();
    });
  });
});