(function($) {
    $.fn.countdown = function(callback) {
        //custom 'this' selector
        sel = $(this);
        //array of custom settings
        var settings = {
            'date': ("3/1/2017 12:00:00"),
            'format': "on"
        };
        //main countdown function
        function countdown_proc() {
            eventDate = Date.parse(settings['date']) / 1000;
            currentDate = Math.floor($.now() / 1000);
            if (eventDate <= currentDate) {
                callback.call(this);
            }
            seconds = eventDate - currentDate;
            days = Math.floor(seconds / (60 * 60 * 24)); //calculate the number of days
            seconds -= days * 60 * 60 * 24; //update the seconds variable with number of days removed
            hours = Math.floor(seconds / (60 * 60));
            seconds -= hours * 60 * 60; //update the seconds variable with number of hours removed
            minutes = Math.floor(seconds / 60);
            seconds -= minutes * 60; //update the seconds variable with number of minutes removed
            //conditional Ss
            if (days == 1) { sel.find(".timeRefDays").text("day"); } else { sel.find(".timeRefDays").text("days"); }
            if (hours == 1) { sel.find(".timeRefHours").text("hour"); } else { sel.find(".timeRefHours").text("hours"); }
            if (minutes == 1) { sel.find(".timeRefMinutes").text("minute"); } else { sel.find(".timeRefMinutes").text("minutes"); }
            if (seconds == 1) { sel.find(".timeRefSeconds").text("second"); } else { sel.find(".timeRefSeconds").text("seconds"); }
            //logic for the two_digits ON setting
            if (settings['format'] == "on") {
                days = (String(days).length >= 2) ? days : "0" + days;
                hours = (String(hours).length >= 2) ? hours : "0" + hours;
                minutes = (String(minutes).length >= 2) ? minutes : "0" + minutes;
                seconds = (String(seconds).length >= 2) ? seconds : "0" + seconds;
            }
            //update the countdown's html values
            if (!isNaN(eventDate)) {
                sel.find(".days").text(days);
                sel.find(".hours").text(hours);
                sel.find(".minutes").text(minutes);
                sel.find(".seconds").text(seconds);
            } else {
                alert("Invalid date. Here's an example: 12 Tuesday 2012 17:30:00");
                clearInterval(interval);
            }
        }
        //run the function
        countdown_proc();
        //loop the function
        var interval = setInterval(countdown_proc, 1000);
        interval();
    }
})(jQuery);
