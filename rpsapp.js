let userScore=0;
let compScore=0;

const choices =document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");

const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");

const genCompChoice = () =>{

    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("game was draw.");
    msg.innerText="game was draw!, paly agian";
    msg.style.backgroundColor="#081b31 ";
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorepara.innerText=userScore;
        msg.innerText='you win! your '+userChoice+" beats "+compChoice;
        msg.style.backgroundColor="green";
    } else {
        
        compScore++;
        compScorepara.innerText=compScore;

          msg.innerText='you lose! your '+userChoice+" beats "+compChoice;
          msg.style.backgroundColor="red";
    }
}


const playGame = (userChoice) => {
    console.log(" user Choice =",userChoice);
    //generate compuetr choice -. modular
    const compChoice=genCompChoice();


    if(userChoice === compChoice){
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            //scissors,paper
            userWin = compChoice === "paper"  ? false :true ;
        } else if( userChoice === "paper"){
            //rock,scissor
            userWin = compChoice === "scissor" ? false : true;
        } else{
            //rock,paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) => {
   
    choice.addEventListener("click", () =>{
        const userChoice =choice.getAttribute("id");
            // console.log('choice was clicked',userChoice);
            playGame(userChoice);

    });
});