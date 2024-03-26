(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    var startDate = new Date('2024-03-24T02:00:00');

    var currentDate = new Date();

    // Calculate the difference in milliseconds
    var difference = currentDate - startDate;

    // Convert the difference to seconds, minutes, hours, and days
    var seconds = Math.floor(difference / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);

    // Calculate remaining hours, minutes, and seconds after days
    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    const x = setInterval(function () {
        const now = new Date().getTime();
        const distance = now - startDate;
        (document.getElementById("days").innerText = Math.floor(days)),
            (document.getElementById("hours").innerText = Math.floor(
                (distance % day) / hour
            )),
            (document.getElementById("minutes").innerText = Math.floor(
                (distance % hour) / minute
            )),
            (document.getElementById("seconds").innerText = Math.floor(
                (distance % minute) / second
            ));
    }, 0);
})();
