'use strict';

var Promise = require('bluebird');
var request = Promise.promisifyAll(require('request'));

var Client = module.exports = function Client (options) {
  var opts = options || {};
  if (typeof opts.linkId === 'undefined') {
    throw 'linkId needs to be set.';
  }
  this.opts = opts;
};

Client.prototype.dispatch = function dispatch (message, channel, priority, cb) {
  var linkId = this.opts.linkId;
  return new Promise(function (resolve, reject) {
    if (typeof message === 'undefined') {
      return reject('message needs to be set');
    }
    request.postAsync({
      url: 'https://api.relayable.io/messages',
      headers: {
        'Content-Type': 'application/json'
      },
      json: {
        link_id: linkId,
        priority: priority || 0,
        channel: channel || 'default',
        message: message
      }
    })
    .then(function (response) {
      resolve(response[1]);
    })
    .error(function (err) {
      reject(err);
    });
  }.bind(this)).nodeify(cb);
};

var version = module.exports.version = require('../package').version;