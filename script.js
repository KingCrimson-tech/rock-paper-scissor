//Rock Paper Scissors

const choices = ['rock', 'paper', 'scissor'];

//implement getComputerChoice
    //randomly return rock paper or scissorn (array not required)
    //use Math.random
function getComputerChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}
    //test it
    // const computerChoice = getComputerChoice()
    // console.log(computerChoice)

//getHumanChoice
    //use prompt to return the valid choice from the user
function getHumanChoice() {
    while (true) {
        choice = prompt("Choose One!! \n Rock, Paper, Scissor");
        choice = choice.toLowerCase();
        if (choices.includes(choice)) {
            return choice
        } else {
            alert("Invalid Input!!");
        }
    }
}

    //test it
    // const humanChoice = getHumanChoice()
    // console.log(humanChoice)

//game variables
    //humanScore and computerScore(global)
    //keep track of them

function playGame() {
//playRound function params humanChoice and computerChoice
    let n = prompt("How many rounds do you want to play?")
    function playRound(){
        let humanScore = 0;
        let computerScore = 0;    
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();   
        if (humanChoice == 'paper' && computerChoice == 'scissor') {
            console.log("You lose! Scissor beats Paper");
            computerScore ++;
        } else if (humanChoice == 'paper' && computerChoice == 'rock') {
            console.log("You win! Paper beats Rock");
            humanScore++;
        } else if (humanChoice == 'rock' && computerChoice == 'paper') {
            console.log("You lose! Paper beats Rock");
            computerScore++;
        } else if (humanChoice == 'rock' && computerChoice == 'scissor') {
            console.log("You win! Rock beats Scissor");
            humanScore++;
        } else if (humanChoice == 'scissor' && computerChoice == 'rock') {
            console.log("You lose! Rock beats Scissor");
            computerScore++;
        }else if (humanChoice =='scissor' && computerChoice == 'paper') {
            console.log("You win! Scissor beats Paper");
            humanScore++;
        } else {
            console.log("Draw!!");
        }
    }

    for(let i = 0; i < n;i++) {
        playRound();
    }
}

playGame();