var sinon = require('sinon');
var middlebot = require('middlebot');
var middlebotPrimus = require('../lib/middlebot-primus');
var expect = require('chai').use(require('sinon-chai')).expect;

describe('Middlebot primus middleware', function () {
  var app, client;

  beforeEach(function () {
    app = middlebot();
    client = {
      send: sinon.spy()
    };
  });

  it('should call send method on the client', function (done) {
    app.use('default', middlebotPrimus({
      client: client,
      event: 'myEvent'
    }));

    app.handle('default', {}, { body: 'body' }, function (err, req, res) {
      expect(client.send).to.be.calledWith('myEvent', 'body');
      done();
    });
  });
});