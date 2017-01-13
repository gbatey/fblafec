Template.attendance.onCreated(function() {
    attendance = this.subscribe('attendance');
});

/*global drawchart */
drawchart = function(datavalues, datalabels) {
    var data = {
        labels: datalabels,
        datasets: [{
                label: "My First dataset",
                fillColor: "rgba(220,220,0,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: datavalues,
            },
        ]
    };
    var ctx = $("#myAttendanceChart").get(0).getContext("2d");
    new Chart(ctx).Line(data);
};


Template.attendance.rendered = function() {
    Tracker.autorun(function() {
        if (attendance.ready()) {
            var data = Attendance.find();
            var datavalues = [];
            var datalabels = [];
            data.forEach(function(option) {
                datavalues.push(option.date);
                datalabels.push(option.hours)
            });

            drawchart(datavalues, datalabels);
        }
    });
};
