const guess = document.getElementById("guess");
const report = document.getElementById("report");

const MAXNUM = 100;
let secret;

function loadGame() {
    guess.max = MAXNUM;
    secret = Math.floor(Math.random() * (MAXNUM+1));
    //report.innerHTML = secret;
}

function makeGuess() {
    let myGuess = guess.value;
        console.log(`myGuess = ${myGuess}`);

    if (myGuess < secret) {
        report.innerHTML += `<br/>[${myGuess}] too small`;
    } else if (myGuess) {
        report.innerHTML += `<br/>[${myGuess}] too large`;
    } else if {
        report.innerHTML += `<br/>[${myGuess}] is correct!`;
        //Winner Winner (Chicken dinner)
    }
}