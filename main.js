// Aw shit, here we go again!

const board = document.getElementById("board");
const pointsP = document.getElementById("points")
const targeCount = 25;
const [minTarget, maxTarget] = [0, targeCount - 1];
const defaultTargetId = "target-";
let points = 0;
let currentTarget = 0;

window.addEventListener('load', initiateBoard);

function getTargetId(idInt = 0) {
    return defaultTargetId + idInt.toString();
}

function initiateBoard() {
    for (let i = 0; i < targeCount; i++) {
        const targetSpan = document.createElement("span");
        targetSpan.classList.add("target");
        targetSpan.id = defaultTargetId + i;
        targetSpan.addEventListener("click", () => onClickTarget(targetSpan.id));
        board.appendChild(targetSpan);
    }
}

function setCurrentTarget(newTarget) {
    const oldTargetSpan = document.getElementById(getTargetId(currentTarget));
    oldTargetSpan.classList.remove("target--current");

    const newTargetSpan = document.getElementById(getTargetId(newTarget));
    newTargetSpan.classList.add("target--current");
    return currentTarget = newTarget;
}

function getRandomTarget() {
    let randomBetweenMinMax = currentTarget;
    while (randomBetweenMinMax == currentTarget) {
        randomBetweenMinMax = (Math.random() * (maxTarget - minTarget) + minTarget).toFixed(0);
        return randomBetweenMinMax;
    }
}

function setRandomTarget() {
    const randomTarget = getRandomTarget();
    setCurrentTarget(randomTarget);
}

function onClickTarget(targetId) {
    if (targetId == getTargetId(currentTarget)) {
        resetTimer();
        startTimer();
        setRandomTarget(targetId);
        setPoints(++points);
    }
}

function setPoints(newPoints) {
    points = newPoints;
    pointsP.innerHTML = newPoints;
}

function startPlaying() {
    startTimer();
    setRandomTarget();
}

function stopPlaying() {
    console.log('points > ', points); 
    console.log('timesArray > ', timesArray);
    stopTimer();
    setPoints(0);
}
