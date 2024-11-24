// Rock Paper Scissors

const choices = ['rock', 'paper', 'scissor'];
const container = document.querySelector(".container");
const instruction = document.createElement("div");
instruction.className = "instruction";
container.appendChild(instruction);
const score = document.createElement("div");
score.className = "score";
container.appendChild(score);

let humanScore = 0;
let computerScore = 0;
let roundCount = 0;
let gameOver = false;

function playGame(choice) {
    if (gameOver) return;

    if (roundCount == 5) {
        if (humanScore > computerScore) {
            instruction.textContent = "Game over You WON!!";     
        }else if (computerScore > humanScore){
            instruction.textContent = "Game over You LOST!!";
        }else {
            instruction.textContent = "Game over It is a TIE!!";
        }

        const newGame = document.createElement("button");
        newGame.className = "btn-over";
        newGame.textContent = "New Game";
        newGame.addEventListener('click', () => {
            location.reload();
        })
        container.appendChild(newGame);
        gameOver = true;
        return;
    }

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    const humanChoice = choice;

    if((humanChoice === 'rock' && computerChoice === 'paper') || (humanChoice === 'paper' && computerChoice === 'scissor') || (humanChoice === 'scissor' && computerChoice === 'rock')){
        computerScore++;
        instruction.textContent = "You lose the computer wins!!";
    }else if ((humanChoice === computerChoice)){
        instruction.textContent = "It is a TIE!!";
    }else {
        humanScore++;
        instruction.textContent = "You win!!";
    }

    score.textContent = `You : ${humanScore} Computer : ${computerScore}`;
    roundCount++;
}