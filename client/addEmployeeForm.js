let closeForm = () => {
  history.back();
};

Template.addEmployeeForm.helpers({
  formType( type ) {
    let employeeForm = Session.get( 'employeeForm' );
    if ( employeeForm ) {
      return employeeForm.type === type;
    }
  },
  formLabel() {
    let employeeForm = Session.get( 'employeeForm' );

    if ( employeeForm ) {
      return {
        button: employeeForm.type === 'edit' ? 'Edit' : 'Add',
        label: employeeForm.type === 'edit' ? 'Edit' : 'Add an'
      };
    }
  },
  selected( v1, v2 ) {
    return v1 === v2;
  },
  employee() {
    let employeeForm = Session.get( 'employeeForm' );

    if ( employeeForm ) {
      return employeeForm.type === 'edit' ? Employees.findOne( employeeForm.empid ) : {};
    }
  }
});

Template.addEmployeeForm.events({
  'submit form' ( event, template ) {
    event.preventDefault();

    let employeeForm = Session.get( 'employeeForm' ),
        submitType = employeeForm.type === 'edit' ? 'editEmployee' : 'addEmployee',
        eventItem  = {
          title: template.find( '[name="title"]' ).value,
          start: template.find( '[name="start"]' ).value,
          end: template.find( '[name="end"]' ).value,
          type: template.find( '[name="type"] option:selected' ).value,
          guests: parseInt( template.find( '[name="guests"]' ).value, 10 )
        };

    if ( submitType === 'editEmployee' ) {
      eventItem._id   = employeeForm.event;
    }

    Meteor.call( submitType, eventItem, ( error ) => {
      if ( error ) {
        Bert.alert( error.reason, 'danger' );
      } else {
        Bert.alert( `Employee ${ `employeeForm`.type }ed!`, 'success' );
        closeForm();
      }
    });
  },
  'click .delete-event' ( event, template ) {
    let employeeForm = Session.get( 'employeeForm' );
    if ( confirm( 'Are you sure? This is permanent.' ) ) {
      Meteor.call( 'removeEmployee', employeeForm.event, ( error ) => {
        if ( error ) {
          Bert.alert( error.reason, 'danger' );
        } else {
          Bert.alert( 'Employee deleted!', 'success' );
          closeForm();
        }
      });
    }
  }
});
