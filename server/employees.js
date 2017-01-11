Meteor.publish('employees', function() {
  return Employees.find();
});

Meteor.methods({
  addEmployee( employee ) {
    check( employee, Employees.schema);

    try {
      return Employees.insert( employee );
    } catch ( exception ) {
      throw new Meteor.Error( '500', `${ exception }` );
    }
  },
  editEmployee( employee ) {``
    check( employee, {
      _id: String,
      title: Match.Optional( String ),
      start: String,
      end: String,
      type: Match.Optional( String ),
      guests: Match.Optional( Number )
    });

    try {
      return Employees.update( employee._id, {
        $set: employee
      });
    } catch ( exception ) {
      throw new Meteor.Error( '500', `${ exception }` );
    }
  },
  removeEmployee( employee ) {
    check( employee, String );

    try {
      return Employees.remove( employee );
    } catch ( exception ) {
      throw new Meteor.Error( '500', `${ exception }` );
    }
  }
});
