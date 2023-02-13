let happy = 50;
let busy = 50;
let stressed = 20;
let username = "";
let animosity = {

};

function updateLoop() {
    decrementLevels();
    // logLevels();
    updateResult();
    updateWave();
}

function decrementLevels() {
    happy = limitLevel(happy - 2);
    busy = limitLevel(busy - 3);
    stressed = limitLevel(stressed - 1);
}

function limitLevel(value) {
    if (value < 0) return 0;
    if (value > 100) return 100;
    return value;
}

function logLevels() {
    let timeNow = new Date();
    console.log(`${timeNow.toUTCString()} - Happy: ${happy} Busy: ${busy} Stressed: ${stressed}`);
}

function updateResult() {
    let outputTarget = document.querySelector("#outputTarget");
    outputTarget.innerHTML = `HBR is... ${getHappyString()} and ${getBusyString()}`;
}

function getHappyString() {
    let happyResult = "";
    if (happy > 70) happyResult = ":)";
    else if (happy > 40) happyResult = ":|";
    else if (happy > 30) happyResult = ":|";
    else happyResult = ":(";
    return happyResult;
}

function getBusyString() {
    let busyResult = "";
    if (busy > 70) busyResult = "entertained";
    else if (busy > 40) busyResult = "a bit bored";
    else if (busy > 30) busyResult = "super bored";
    else busyResult = "dying of boredom";
    return busyResult;
}

function init() {
    let treatBtn = document.querySelector("#treat");
    let pokeBtn = document.querySelector("#poke");
    treatBtn.addEventListener("click", () => {
        happy += 40;
        busy = 100;
    });
    pokeBtn.addEventListener("click", () => {
        happy -= 50;
        busy = 100;
    });

    var looper = setInterval(updateLoop, 300);
}

init();