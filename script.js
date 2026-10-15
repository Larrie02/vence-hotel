var ci = document.getElementById('ci');
var co = document.getElementById('co');
var gu = document.getElementById('gu');
var msg = document.getElementById('msg');

// Block past dates
var today = new Date().toISOString().split('T')[0];
ci.min = co.min = today;

function apply() {
  if (!ci.value || !co.value) {
    msg.textContent = 'Please choose your check-in and check-out dates.';
    return;
  }
  if (co.value <= ci.value) {
    msg.textContent = 'Check-out must be after check-in.';
    return;
  }
  var nights = Math.round((new Date(co.value) - new Date(ci.value)) / 864e5);
  msg.textContent = 'Great choice! ' + nights + ' night' + (nights > 1 ? 's' : '') +
    ' for ' + gu.value + '. Our team will confirm your stay shortly.';
}

function playVideo() {
  alert('Hotel tour video coming soon.');
}
