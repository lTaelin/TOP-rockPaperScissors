
let playerPick = "";



function getRandomInt(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}



function getComputerChoice() {
    if (getRandomInt(4, 1) === 1) {
        return "Rock";
    } else if (getRandomInt(4, 1) === 2) {
        return "Paper";
    } else if (getRandomInt(4, 1) === 3) {
        return "Scissors";
    } 
}

let compPick = getComputerChoice()
console.log(compPick)