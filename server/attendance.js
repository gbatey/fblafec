Meteor.publish("attendance", function() {
  return Attendance.find();
});

Meteor.startup(function() {
  if (typeof Attendance.findOne() === 'undefined') {
    // make fake data for Attendance Chart

    var fake = {
      "00": 0,
      "01": 0,
      "02": 0,
      "03": 0,
      "04": 0,
      "05": 0,
      "06": 0,
      "07": 0,
      "08": 0,
      "09": 101,
      "10": 153,
      "11": 149,
      "12": 123,
      "13": 165,
      "14": 158,
      "15": 153,
      "16": 76,
      "17": 32,
      "18": 15,
      "19": 8,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0
    };

    for (h in fake) {
      var newEntry = {
        value: fake[h],
        date: "YYYY-MM-DD",
        hour: h
      }
      Attendance.insert(newEntry);
    }
  }
});

Meteor.methods({
  updateAttendance(id, value) {
    try {
      return Attendance.update({_id: id}, { $set: { value: value }});
    } catch ( exception ) {
      throw new Meteor.Error( '500', `${ exception }` );
    }
  }
});
