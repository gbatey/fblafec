Template.users.onCreated(function () {
  var instance = this

  instance.loaded = new ReactiveVar(0)
  instance.limit = new ReactiveVar(5)

  instance.autorun(function () {
    var limit = instance.limit.get()
    var subscription = instance.subscribe('users', limit)
    if (subscription.ready()) {
      instance.loaded.set(limit)
    }
  })

  instance.users = function () {
    return Meteor.users.find({}, { limit: instance.loaded.get() })
  }
})

Template.users.events({
  'click .load-more': function (event, instance) {
    event.preventDefault()

    var limit = instance.limit.get()
    limit += 5
    instance.limit.set(limit)
  }
})

Template.users.helpers({
  users: function() {
    return Template.instance().users()
  },
  hasMoreUsers: function () {
    return Template.instance().users().count() >= Template.instance().limit.get();
  }
})
