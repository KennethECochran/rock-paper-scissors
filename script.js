const container = document.querySelector('#container')

const content = document.createElement('div');
content.classList.add('content');

const result = document.createElement('div');
result.classList.add('result')

let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors'];
    const pick = Math.floor(Math.random() * choices.length);
    return(choices[pick]);
}

function updatePlayerScore(){
    playerScore+=1;
}

function updateComputerScore(){
    computerScore+=1;
}

function playRound(playerSelection, computerSelection){
    let playerPick = playerSelection.toLowerCase();

    if(playerScore == 5){
        alert("Congratulations! You Win!")
    }

    else if(computerScore == 5){
        alert("Sorry... You Lose...")
    }

    else{
        if(playerPick === computerSelection){
            content.textContent = `Player Pick: ${playerPick} | Computer Pick: ${computerSelection}`;
            result.textContent = `Current Score: Player - ${playerScore} | Computer - ${computerScore}`;
            container.appendChild(content);
            container.appendChild(result);
        }
        else if(playerPick == 'rock' && computerSelection == 'scissors'){
            updatePlayerScore();
            content.textContent = `Player Pick: ${playerPick} | Computer Pick: ${computerSelection}`;
            result.textContent =  `Current Score: Player - ${playerScore} | Computer - ${computerScore}`;
            container.appendChild(content);
            container.appendChild(result);
        }
        else if(playerPick == 'rock' && computerSelection == 'paper'){
            updateComputerScore();
            content.textContent = `Player Pick: ${playerPick} | Computer Pick: ${computerSelection}`;
            result.textContent = `Current Score: Player - ${playerScore} | Computer - ${computerScore}`;
            container.appendChild(content);
            container.appendChild(result);
        }
        else if(playerPick == 'paper' && computerSelection == 'rock'){
            updatePlayerScore();
            content.textContent = `Player Pick: ${playerPick} | Computer Pick: ${computerSelection}`;
            result.textContent = `Current Score: Player - ${playerScore} | Computer - ${computerScore}`;
            container.appendChild(content);
            container.appendChild(result);
        }
        else if(playerPick == 'paper' && computerSelection == 'scissors'){
            updateComputerScore();
            content.textContent = `Player Pick: ${playerPick} | Computer Pick: ${computerSelection}`;
            result.textContent = `Current Score: Player - ${playerScore} | Computer - ${computerScore}`;
            container.appendChild(content);
            container.appendChild(result);
        }
        else if(playerPick == 'scissors' && computerSelection == 'rock'){
            updateComputerScore();
            content.textContent = `Player Pick: ${playerPick} | Computer Pick: ${computerSelection}`;
            result.textContent = `Current Score: Player - ${playerScore} | Computer - ${computerScore}`;
            container.appendChild(content);
            container.appendChild(result);
        }
        else if(playerPick == 'scissors' && computerSelection == 'paper'){
            updatePlayerScore();
            content.textContent = `Player Pick: ${playerPick} | Computer Pick: ${computerSelection}`;
            result.textContent = `Current Score: Player - ${playerScore} | Computer - ${computerScore}`;
            container.appendChild(content);
            container.appendChild(result);
        }
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const computerSelection = getComputerChoice();
        playRound(button.id, computerSelection);
    });
});