Employees = new Mongo.Collection( 'employees' );

Employees.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Employees.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

Employees.schema = new SimpleSchema({
  _id: {
    type: String,
    optional: true
  },
  'fullName': {
    type: String,
    label: 'The full name of the employee.'
  },
  'email': {
    type: String,
    label: 'Contact email address.',
    optional: true
  },
  'phone': {
    type: String,
    label: 'Contact phone number.'
  },
  'dob': {
    type: String,
    label: 'Date of Birth.',
    optional: true
  },
  'address': {
    type: String,
    label: 'Mail street address.',
    optional: true
  },
  'city': {
    type: String,
    label: 'City of the address.',
    optional: true
  },
  'state': {
    type: String,
    label: 'State of the address.',
    optional: true
  },
  'zipCode': {
    type: String,
    label: 'Zip code of the address.',
    optional: true
  },
  'erName': {
    type: String,
    label: 'Emergency contact name.',
    optional: true
  },
  'erRelation': {
    type: String,
    label: 'Relation to employee.',
    optional: true
  },
  'erPhone': {
    type: String,
    label: 'Emergency contact phone number.',
    optional: true
  },
  'jobTitle': {
    type: String,
    label: 'Job title.',
    optional: true
  },
  'beginDate': {
    type: String,
    label: 'Begin date.',
    optional: true
  },
  'department': {
    type: String,
    label: 'Department.',
    optional: true
  },
  'employeeType': {
    type: String,
    label: 'Employee Type.',
    optional: true
  },
  'scheduleType': {
    type: String,
    label: 'Schedule Type.',
    optional: true
  },
  'payrollFrequency': {
    type: String,
    label: 'Payroll Frequency.',
    optional: true
  },
  'payrateType': {
    type: String,
    label: 'Payrate Type.',
    optional: true
  },
  'payrate': {
    type: String,
    label: 'Payrate.',
    optional: true
  },
  'overtime': {
    type: String,
    label: 'Overtime.',
    optional: true
  },
});

Employees.attachSchema( Employees.schema );
