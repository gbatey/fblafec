import { Template } from 'meteor/templating'
import { FlowRouter } from 'meteor/kadira:flow-router'

Template.register.onRendered(function() {
  $('body').addClass('hold-transition login-page')

  this.$('#register').validate({
    rules: {
      email: { email: true },
      password: { minlength: 6 },
      retype: { equalTo: '[name=password]' }
    },
    highlight: function(element) {
        $(element).closest('.form-group').addClass('has-error')
    },
    unhighlight: function(element) {
        $(element).closest('.form-group').removeClass('has-error')
    },
    errorElement: 'span',
    errorClass: 'help-block',
  })

  submitBtn = Ladda.create($('.ladda-button')[0])
})

Template.register.events({
  'submit form': function(event){
    event.preventDefault();
    var email = $('[name=email]').val();
    var password = $('[name=password]').val();
    var fullname = $('[name=fullname]').val();

    Meteor.call('ATCreateUserServer', {
      email: email,
      password: Accounts._hashPassword(password),
      profile: {
        fullname: fullname
      }
    }, function (err) {
      if (err){
        Bert.alert({ message: err.reason, type: 'danger' })
      } else {
        Meteor.loginWithPassword(email, password);

        var path = Session.get('redirectAfterSignin')
        var current = FlowRouter.current().path
        if (path == undefined || path == current) path = 'home'
        FlowRouter.go(path)
      }
    });
  }
});
