let seconds = 00;
let tens = 00;
let interval;
const timesArray = [];

function startTimer() {
    clearInterval(interval);
    interval = setInterval(run, 10);
}

function stopTimer() {
    clearInterval(interval);
}

function resetTimer() {
    clearInterval(interval);
    timesArray.push({
        seconds,
        tens
    });
    tens = 00;
    seconds = 00;
}



function run() {
    tens++;

    if (tens <= 9) { }

    if (tens > 9) { }

    if (tens > 99) {
        seconds++;
        tens = 0;
    }

    if (seconds > 9) { }
}
