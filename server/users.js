Meteor.publish('users', function (limit) {
  return Meteor.users.find({}, {limit: limit})
})

Meteor.publish('singleUser', function (terms) {
  if (Match.test(terms, String)) {
    terms = { _id: terms }
  }
  var user = Meteor.users.findOne(terms)
  return user ? Meteor.users.find({ _id: user._id }) : []
})

Meteor.methods({
  'user.toggleHidden': function () {
    var userId = Meteor.userId()
    if (userId) {
      var isHidden = Meteor.user().status.hidden
      Meteor.users.update({ _id: userId }, { $set: { 'status.hidden': !isHidden }})
    }
  }
})
