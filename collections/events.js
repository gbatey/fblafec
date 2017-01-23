Events = new Mongo.Collection( 'events' );

Events.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Events.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

Events.schema = new SimpleSchema({
  _id: {
    type: String,
    optional: true
  },
  'title': {
    type: String,
    label: 'The title of this event.',
    optional: true
  },
  'start': {
    type: String,
    label: 'When this event will start.'
  },
  'end': {
    type: String,
    label: 'When this event will end.'
  },
  'type': {
    type: String,
    label: 'What type of event is this?',
  },
});

Events.attachSchema( Events.schema );
