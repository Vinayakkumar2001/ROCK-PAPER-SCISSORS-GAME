let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userChoicePara = document.querySelector("#user-score");
const compChoicePara = document.querySelector("#comp-score");
const resetBtn = document.querySelector("#reset-btn");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIndx = Math.floor(Math.random() * 3); 
    return options[randIndx];
};
const drawGame = () =>{
// console.log("game was draw");
msg.innerText = "Game was Draw. Play Again!";
msg.style.backgroundColor = "black";
};

const showWinner = (userWin , userChoice , compChoice) => {
    if(userWin){
        // console.log("you win!");
        userScore++;
        userChoicePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        // console.log("you lose!");
        compScore++;
        compChoicePara.innerText = compScore;
        msg.innerText = `You Lose!  ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
 console.log("user choice", userChoice);
//  generate comp choice
const compChoice = genCompChoice();
console.log("comp choice", compChoice);

if(userChoice === compChoice){
    //draw game
    drawGame();
}
else{
    let userWin = true;
    if(userChoice === "rock"){
        userWin = compChoice === "paper"? false : true;
    }
    else if(userChoice === "paper"){
     userWin = compChoice === "scissors" ? false : true ;
    }
    else {
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin , userChoice , compChoice);
}
};

choices.forEach((choice) => {
choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
});
});

const resetGame = () => {
    userScore = 0;
    compScore = 0;
    userChoicePara.innerText = userScore;
    compChoicePara.innerText = compScore;
    msg.innerText = "Play Again!";
    msg.style.backgroundColor = "blue"; // You can choose a different color if you prefer
};
resetBtn.addEventListener("click", resetGame);