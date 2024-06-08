let userScore = 0;
let comScore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");


const genCompChoice = () =>{
    const options = ["Rock", "Paper", "Scissor"];
    // rock, paper, scissor
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = () => {

    msg.innerText = "Game was draw, play again";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin) => {
    if(userWin)
    {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You win !";   
        msg.style.backgroundColor = "green";
    }
    else
    {
        comScore++;
        compScorePara.innerText = comScore;
        msg.innerText = "You lose !";
        msg.style.backgroundColor = "red";
    } 
}

const playGame = (userChoice) => {
    // console.log("User Choice : ", userChoice);
    //to generate computer choice  -> modular way of programming
    const compChoice = genCompChoice();
    // console.log("Computer Choice : ", compChoice);

    if(userChoice===compChoice)
    {
        drawGame();
    }
    else
    {
        let userWin = true;
        if(userChoice==="Rock")
        {
            //compChoice = scissor/ paper
            userWin = compChoice==="Paper" ? false : true;
        }
        else if(userChoice==="Paper")
        {
            //compChoice =  scissor/ rock
            userWin = compChoice === "Scissor" ? false : true; 
        }
        else
        {
            //compChoice = paper/rock
            userWin = compChoice === "Rock" ? false : true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });  
});