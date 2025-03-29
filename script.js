let userScore=0;
 let compScore=0;
 const choices =document.querySelectorAll(".choice");
 const msg =document.querySelector("#msg");
 const userScorepara=document.querySelector("#user-score");
 const compScorepara=document.querySelector("#comp-score");
 choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
  playGame(userChoice);
    });
});
 
const playGame=(userChoice)=>{
console.log("userChoice=",userChoice);
//Generate computer choice ->modular
const compChoice= generateComputerChoice();
console.log("computer choice=",compChoice);

if(userChoice === compChoice){
    //draw game
    drawGame();
    return;
}
else{
    let userWin=true;
    if(userChoice === "rock"){
        //scissor,paper
       userWin = compChoice === "paper" ? false :true; 
    }
    else if(userChoice==="paper")
    {
        //rock,scissor
    userWin = compChoice === "scissor" ? false:true;
    }
    else(userChoice=="scissors")
    {
     //rock,paper
     userWin = compChoice === "rock" ? false:true;
    }
    showWinner(userWin,userChoice,compChoice);
}
};

const generateComputerChoice=()=>{
    //rock,paper scissors
    const options=["rock","paper","scissors"];
  const randIdx= Math.floor(Math.random()*3);
  return options[randIdx];
}

const drawGame=()=>{
    msg.innerText =("Game was Draw. play again.");
     msg.style.backgroundColor="black";
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText =`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else
    {
        compScore++;
        compScorepara.innerText = compScore;
    msg.innerText =`You lose! ${compChoice} beats Your ${userChoice}`;
     msg.style.backgroundColor="red";
    }
};

