/**
 * Expose module.
 */

module.exports = middlebotPrimusFactory;

/**
 * Create a new Primus middleware.
 *
 * @param {Object} options
 */

function middlebotPrimusFactory(options) {

  return function middlebotPrimus(req, res, next) {
    options.client.send(options.event, res.body);
    next();
  };
}