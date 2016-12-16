Template.userPanel.helpers({
  thumbnailPhoto: function() {
    return Meteor.user().profile.thumbnailPhoto || '/img/missingThumbnailPhoto.svg'
  },
  isOnline: function() {
    var status = Meteor.user().status || {}
    return status.online && !status.hidden
  },
  onlineStatus: function() {
    var status = Meteor.user().status || {}
    return status.hidden ? 'hidden' : status.online ? 'online' : 'offline'
  }
})

Template.userPanel.events({
  'click #onlineToggle': function (event) {
    event.preventDefault()
    Meteor.call('user.toggleHidden')
  }
})
