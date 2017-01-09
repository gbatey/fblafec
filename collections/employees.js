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
  },
  'address': {
    type: String,
    label: 'Mail street address.',
  },
  'city': {
    type: String,
    label: 'City of the address.',
  },
  'state': {
    type: String,
    label: 'State of the address.',
  },
  'zipCode': {
    type: String,
    label: 'Zip code of the address.',
  },
  'erName': {
    type: String,
    label: 'Emergency contact name.',
  },
  'erRelation': {
    type: String,
    label: 'Relation to employee.',
  },
  'erPhone': {
    type: String,
    label: 'Emergency contact phone number.',
  },
  'jobTitle': {
    type: String,
    label: 'Job title.',
  },
  'beginDate': {
    type: String,
    label: 'Begin date.',
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
  },
  'overtime': {
    type: String,
    label: 'Overtime.',
    optional: true
  },
});

Employees.attachSchema( Employees.schema );
