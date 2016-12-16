Template.profile.onCreated(function() {
  var self = this

  var username = FlowRouter.getParam('username')
  self.autorun(function() {
    self.subscribe('singleUser', {username: username}, function() {
      var user = Meteor.users.findOne({username: username}) || {}
      if (!user.username) FlowRouter.withReplaceState(function () {
        FlowRouter.go('notFound')
      })
    })
  })
})

Template.profile.helpers({
  user: function() {
    var username = FlowRouter.getParam('username')
    var user = Meteor.users.findOne({username: username}) || {}
    return user
  },

  isCurrentUser: function() {
    var username = FlowRouter.getParam('username')
    var currentUser = Meteor.user() || {}
    return (currentUser.username === username)
  },

  thumbnailPhoto: function() {
    var username = FlowRouter.getParam('username')
    var user = Meteor.users.findOne({username: username}) || { profile: {} }
    return user.profile.thumbnailPhoto || '/img/missingThumbnailPhoto.svg'
  }
})
