var AuthenticatedRoute = require('./authenticated_route');

var TopSecretRoute = AuthenticatedRoute.extend({
  model: function() {
    var store = App.__container__.lookup('store:main');
    return store.find('user');
  }
});

module.exports = TopSecretRoute;