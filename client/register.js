import { Template } from 'meteor/templating'

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
/*
    Accounts.createUser({
      email: email,
      password: password
    });
*/
  }
});
