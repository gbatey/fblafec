import moment from "moment"
//import "../collections/events.js"

Template.events.onCreated(() => {
  let template = Template.instance();
  template.subscribe('events');
});

Template.events.onRendered(() => {
  $('#events-calendar').fullCalendar({
    defaultView: "agendaWeek",
    events(start, end, timezone, callback) {
      let data = Events.find().fetch().map((event) => {
        event.editable = true; // allow edit of past events
        return event;
      });

      if (data) {
        callback(data);
      }
    },
    eventRender(event, element) {
      element.find('.fc-content').html(
        `<h4>${ event.title }</h4><p class="type-${ event.type }">#${ event.type }</p>`
      );
    },
    eventDrop(event, delta, revert) {
      let date = event.start.format();
      let update = {
        _id: event._id,
        start: date,
        end: date
      };

      Meteor.call('editEvent', update, (error) => {
        if (error) {
          Bert.alert(error.reason, 'danger');
        }
      });
    },
    dayClick(date) {
      Session.set('eventModal', {
        type: 'add',
        date: date.format()
      });
      $('#add-edit-event-modal').modal('show');
    },
    eventClick(event) {
      Session.set('eventModal', {
        type: 'edit',
        event: event._id
      });
      $('#add-edit-event-modal').modal('show');
    }
  });
  Tracker.autorun(() => {
    Events.find().fetch();
    $('#events-calendar').fullCalendar('refetchEvents');
  });
});
