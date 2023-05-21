var countdownText = document.getElementById('countdown-text');

var countdown = 3;

var countdownInterval = setInterval(function() {
  countdown--;
  countdownText.innerHTML = countdown;
  if (countdown === 0) {
    clearInterval(countdownInterval);
    document.getElementById('countdown').classList.add('boom');
    document.getElementById('message').style.display = 'block';
  }
}, 1000);
