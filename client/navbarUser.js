import { Template } from 'meteor/templating'

Template.navbarUser.events({
  'click #signout': function(event) {
    event.preventDefault()
    AccountsTemplates.logout()
  }
})

Template.navbarUser.helpers({
  thumbnailPhoto: function() {
    return Meteor.user().profile.thumbnailPhoto || '/img/missingThumbnailPhoto.svg'
  }
})
