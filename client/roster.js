Template.roster.events({
  'click #add-employee' (event, template) {
    Session.set('employeeForm', {
      type: 'add'
    });
  },
})
