function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  return {
    total: t,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

function initializeClock(id, endtime) {
  var clock = document.querySelector('.offer__clock');
  var hoursSpan = clock.querySelector('.offer__clock-hours');
  var minutesSpan = clock.querySelector('.offer__clock-minutes');
  var secondsSpan = clock.querySelector('.offer__clock-seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    if (t.total <= 0) {
      clearInterval(timeinterval);
      var deadline = new Date(Date.parse(new Date()) + 6 * 1000);
      initializeClock('countdown', deadline);
    }

    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}
function timeToSeconds(timeString) {
  var timeParts = timeString.split(':');
  var hours = parseInt(timeParts[0], 10);
  var minutes = parseInt(timeParts[1], 10);
  var seconds = parseInt(timeParts[2], 10);
  var totalSeconds = hours * 3600 + minutes * 60 + seconds;

  return totalSeconds;
}

var attributeValue = document
  .querySelector('.offer__clock')
  .getAttribute('data-time');

var deadline = new Date(
  Date.parse(new Date()) + timeToSeconds(attributeValue) * 1000
);
initializeClock('countdown', deadline);
