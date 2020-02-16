(function () {
    "use strict";

    let userScore = 0;
    let computerScore = 0;
    const userScore_span = document.getElementById("user-score");
    const computerScore_span = document.getElementById("computer-score");
    const scoreBoard_div = document.querySelector(".score-board");
    const result_p = document.querySelector(".result > p");
    const rock_div = document.getElementById("r");
    const paper_div = document.getElementById("p");
    const scissors_div = document.getElementById("s");

    function getComputerChoice() {
        const choices = ['r','p','s'];
        const randomNumber = Math.floor(Math.random() * 3);
        return choices[randomNumber];
    }

    function convertToWord(letter){
        if (letter === 'r') return "Rock";
        if (letter === 'p') return "Paper";
        return "Scissors";
    }
    //Normal result
    function win(user, computer) {
        const choice_div = document.getElementById(user);
        userScore++;
        userScore_span.innerHTML = userScore;
        computerScore_span.innerHTML = computerScore;
        result_p.innerHTML = convertToWord(user) + " beats " + convertToWord(computer) + ". You win!";
        choice_div.classList.add('green-glow');
        setTimeout(function () { choice_div.classList.remove('green-glow')}, 300);
    }
    //ES6
    function lose(user, computer) {
        const choice_div = document.getElementById(user);
        computerScore++;
        computerScore_span.innerHTML = computerScore;
        userScore_span.innerHTML = userScore;
        result_p.innerHTML = `${convertToWord(user)} loses to ${convertToWord(computer)}. You lost...`;
        choice_div.classList.add('red-glow');
        setTimeout(() => choice_div.classList.remove('red-glow'), 300);
    }

    function draw(user, computer) {
        const choice_div = document.getElementById(user);
        result_p.innerHTML = `${convertToWord(user)} equals ${convertToWord(computer)}. It's a draw...`;
        choice_div.classList.add('gray-glow');
        setTimeout(() => choice_div.classList.remove('gray-glow'), 300);
    }

    function game(useChoice) {
        const computerChoice = getComputerChoice();
        switch (useChoice + computerChoice) {
            case "rs":
            case "pr":
            case "sp":
                win(useChoice, computerChoice);
                break;
            case'rr':
            case'pp':
            case'ss':
                draw(useChoice, computerChoice);
                break;
            default:
                lose(useChoice, computerChoice);
                break;
        }
    }

    function main() {
        rock_div.addEventListener("click", () => game('r'));
        paper_div.addEventListener('click', () => game('p'));
        scissors_div.addEventListener('click',  () => game('s'));
    }

    main();


































})();
