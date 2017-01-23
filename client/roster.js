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

Template.rosterItem.events({
  'click #delete-employee' (event, template) {
    let employeeId = this._id;
    sweetAlert({
      title: "Are you sure?",
      text: "You will not be able to recover this employee file!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, delete it!",
      closeOnConfirm: true,
      html: false
    }, function() {
      Meteor.call( 'removeEmployee', employeeId, ( error ) => {
        if ( error ) {
          Bert.alert( error.reason, 'danger' );
        } else {
          Bert.alert( 'Employee deleted!', 'success' );
          closeModal();
        }
      });
    });
  }
})
