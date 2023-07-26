const guess = document.getElementById("guess");
const report = document.getElementById("report");

const MAXNUM = 100;
let secret;

function loadgame() {
    guess.max = MAXNUM;
    secret = MAth.floor(math.random() * MAXNUM+1);
    report.innerHTML = secret;

}

function makeGuess() {

}