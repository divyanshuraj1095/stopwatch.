let startTime, updatedTime, difference;
let interval;
let running = false;
let laps = [];

const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const lapsList = document.getElementById('laps');

function startStopwatch() {
    if (!running) {
        startTime = new Date().getTime();
        interval = setInterval(updateTime, 10);
        running = true;
    }
}

function stopStopwatch() {
    if (running) {
        clearInterval(interval);
        running = false;
        laps.push(display.innerHTML);
        updateLaps();
    }
}

function resetStopwatch() {
    clearInterval(interval);
    running = false;
    display.innerHTML = "00:00:00";
    laps = [];
    updateLaps();
}

function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    display.innerHTML = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" +
        (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" +
        (seconds > 9 ? seconds : "0" + seconds);
}

function updateLaps() {
    lapsList.innerHTML = '';
    laps.forEach((lap, index) => {
        let lapItem = document.createElement('li');
        lapItem.innerText = Lap `${index + 1} : ${lap}`;
        lapsList.appendChild(lapItem);
    });
}

startButton.addEventListener('click', startStopwatch);
stopButton.addEventListener('click', stopStopwatch);
resetButton.addEventListener('click', resetStopwatch);