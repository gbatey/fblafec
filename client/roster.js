Template.roster.events({
    'click #add-employee' (event, template) {
        FlowRouter.go('add-employee');
    },
})

Template.roster.onCreated(() => {
    let template = Template.instance();
    template.subscribe('employees');
})

Template.roster.helpers({
  employees() {
    return Employees.find().fetch()
  }
})

Template.rosterItem.events({
  'click #edit-employee' (event, template) {
    FlowRouter.go('edit-employee', {slug: this._id} )
  }
})
