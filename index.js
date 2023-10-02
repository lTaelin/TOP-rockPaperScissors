let playerScore;
let computerScore;


// get use's choice and makes it lowercase so it fits in the equiality comparation.
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
    let result;
    const playerPick = getUserChoice();
    const compPick = getComputerChoice();
    

    if (playerPick === "rock" && compPick === "scissors" ) {
        result = "You win! - Rock beats scissors!";
    } else if (playerPick === "scissors" && compPick=== "paper") {
        result = "You win! - sicissors beats paper!";
    } else if (playerPick === "paper" && compPick === "rock") {
        result = "You win! - paper beats rock!";
    } else if (playerPick === compPick) {
        result = "it's a tie";
    } else {
        result = "You lose";
    }
     
    console.log(result);
    return result
    
}

function game(){
    while(playerScore < 5 && computerScore < 5) {
        const status = playRound();
        if(status.includes("You win!")) {
            playerScore++;
        } else if(status.includes("You lose")) {
            computerScore++;
        }

        console.log(`Player: ${playerScore} - PC: ${computerScore}`)
    }
// use a counter to store the amount of times each player wins
//set the counter to a maximum of  5 wins
//use a while or for loop to check them both(maybe one of each)
// display the count up
//show the winner.
}