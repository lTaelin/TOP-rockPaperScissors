

function getUserChoice() {
    let choice = prompt("Please pick from: Rock, paper or scissors");
    const validOptions = ["rock", "paper" , "scissors"];
    if (choice !== null){
        choice = choice.toLowerCase();
        if(validOptions.includes(choice)) {
            return choice
        } else {
            window.alert(choice + " is not a valid option")
        }
    } else {
        window.alert("please provide a choice")
    }
}


function getRandomInt() {
    return Math.floor(Math.random() * 3);
}


function getComputerChoice() {
    if (getRandomInt() === 0) {
        return "rock";
    } else if (getRandomInt() === 1) {
        return "paper";
    } else  {
        return "scissors";
    } 
}

function playRound() {
    const playerPick = getUserChoice();
    const compPick = getComputerChoice();
    console.log(compPick);

    if (playerPick === "rock" && compPick === "scissors" ) {
        console.log("You win");
    } else if (playerPick === "scissors" && compPick=== "paper") {
        console.log("Your win");
    } else if (playerPick === "paper" && compPick === "rock") {
        console.log("You got it!");
    } else if (playerPick === compPick) {
        console.log("it's a tie");
    } else {
        console.log("You lose.");
    }
        
}

playRound();