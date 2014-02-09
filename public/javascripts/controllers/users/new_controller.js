var UsersNewController = Ember.ObjectController.extend({
  createUser: function() {
    var router = this.get('target');
    var name = this.getWithDefault('name', '');
    var email = this.getWithDefault('email', '');
    var username = this.getWithDefault('username', '');
    var password = this.getWithDefault('password', '');
    var password_confirmation = this.getWithDefault('password_confirmation', '');
    var data = {name: name, email: email, username: username, password: password, password_confirmation: password_confirmation};
    
    var user = this.get('model');

    $.post('/users', { user: data }, function(results) {
      App.AuthManager.authenticate(results.api_key.access_token, results.api_key.user_id);
      router.transitionTo('index');

    }).fail(function(jqxhr, textStatus, error ) {
      if (jqxhr.status === 422) {
        errs = JSON.parse(jqxhr.responseText);
        user.set('errors', errs.errors);
      }
    });
  }
});

module.exports = UsersNewController;