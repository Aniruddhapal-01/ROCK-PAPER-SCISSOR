let userScore = 0;
let compScore =0;
const msg= document.querySelector("#msg")

const choices = document.querySelectorAll(".choice");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score")
const genComChoice=()=>{
    const options = [ "rock", "paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>{
    msg.innerText=`game is draw, play again 😇!`
    msg.style.backgroundColor="#081b31"; 
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;

        msg.innerText = `You Win🥳! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green"; 
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText = `You lose😢${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red"; 
    }
}
const playGame =(userChoice)=>{
    const compChoice=genComChoice()
    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"? false: true;
        }else if (userChoice==="paper"){
            userWin=compChoice==="scissor"? false: true;
        }else{
            userWin=compChoice==="rock"? false:true;
        }
        showWinner(userWin,userChoice,compChoice)
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});

