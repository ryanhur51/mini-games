document.getElementById('switch').addEventListener('click', function() {
    window.location.href = 'pollution.html';
});

function updateClock() {
    var now = new Date();
    var seconds = 0;
    seconds = now.getSeconds(); 
    var secondsString = (seconds < 10) ? '0' + seconds : seconds;
    document.getElementById('clock').textContent = secondsString;
}
updateClock();
setInterval(updateClock, 1000);
