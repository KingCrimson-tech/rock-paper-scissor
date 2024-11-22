//Rock Paper Scissors

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");

let humanChoice = "";

rock.addEventListener('click', () => {
    humanChoice = rock.textContent.toLowerCase();
    playRound();
});

paper.addEventListener('click', () => {
    humanChoice = paper.textContent.toLowerCase();
    playRound();
});

scissor.addEventListener('click', () => {
    humanChoice = scissor.textContent.toLowerCase();
    playRound();
});

const choices = ['rock', 'paper', 'scissor'];
function getComputerChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}

const container = document.querySelector(".container")
const div = document.createElement("div");
container.appendChild(div);

let humanScore = 0;
let computerScore = 0;

function playRound() {
    const computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) {
        div.textContent = `Tie! Both chose ${humanChoice}. Score - You: ${humanScore} - Computer: ${computerScore}`;
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissor') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissor' && computerChoice === 'paper')
    ) {
        humanScore++;
        div.textContent = `You win! ${humanChoice} beats ${computerChoice}. Score - You: ${humanScore} - Computer: ${computerScore}`;
    } else {
        computerScore++;
        div.textContent = `Computer wins! ${computerChoice} beats ${humanChoice}. Score - You: ${humanScore} - Computer: ${computerScore}`;
    }
}