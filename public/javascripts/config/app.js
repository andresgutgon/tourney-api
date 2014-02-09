require('../vendor/jquery');
require('../vendor/jquery.cookie');
require('../vendor/handlebars');
require('../vendor/ember');
require('../vendor/ember-data-latest');

var App = window.App = Ember.Application.create();
// App.Store = require('./store');

App.store = DS.Store.create({
  adapter: 'DS.RESTAdapter'
});

module.exports = App;