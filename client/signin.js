import { Template } from 'meteor/templating'
import { FlowRouter } from 'meteor/kadira:flow-router'

// button for animation during signin w/ server
var submitBtn

Tracker.autorun(function () {
  if (!Meteor.userId()) {
    var path = FlowRouter.current().path
console.log('set redirectAfterSignin', path)
    Session.set('redirectAfterSignin', path)
  }
})

Template.signin.onRendered(function() {
  $('body').addClass('hold-transition login-page')

  this.$('#sign-in').validate({
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

Template.signin.onDestroyed(function() {
  $('body').removeClass('hold-transition login-page')
})

Template.signin.events({
  'submit form': function(event) {
    event.preventDefault()
    var email = event.target.email.value
    var password = event.target.password.value

    submitBtn.start()
    Meteor.loginWithPassword(email, password, function (err) {
      submitBtn.stop()
      if (err) {
        var msg = err.reason;
        if (err.error == 403) msg = 'Failed to sign in. Did you forget your password?';
        Bert.alert({ message: msg, type: 'danger' })
        return
      }
      //Bert.alert({ message: Meteor.user().email + ' signed in.', type: 'success' })
      var path = Session.get('redirectAfterSignin')
      var current = FlowRouter.current().path
      if (path == undefined || path == current) path = 'home'
      FlowRouter.go(path)
    })
  }
})
