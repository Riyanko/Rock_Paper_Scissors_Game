let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#ms");
let usersc=document.querySelector("#usersc");
let compsc=document.querySelector("#compsc");

const drawgame=()=>{
    console.log("Game was draw");
    msg.innerText="Game was Draw!";
    msg.style.backgroundColor="black";
    msg.style.color="white";
}
const showWinner=(userwin,userChoice,compch)=>{
    if(userwin){
        userscore++;
        usersc.innerText=userscore;
        msg.innerText=`You Win! ${userChoice} beats ${compch}`;
        msg.style.backgroundColor="lightgreen";
        msg.style.color="black";
    }else{
        compscore++;
        compsc.innerText=compscore;
        console.log("You lose!!");
        msg.innerText=`You Lose!! ${compch} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
   
}
const genCompCh=()=>{
    const opt=["rock","paper","scissor"];
    const index=Math.floor(Math.random()*3);
    return opt[index];
}

const playgame=(userChoice)=>{
    console.log("User choice = ",userChoice);
    const compch=genCompCh();
    console.log("Comp Choice = ",compch);
    if(userChoice===compch){
        drawgame();
    }else{
        let userwin=true;
        if(userChoice==="rock"){
            userwin= compch==="paper"? false : true;
        } else if(userChoice==="paper" ){
            userwin= compch==="scissor"? false : true;
        } else{
            userwin=compch==="rock"? false : true;
        }
        showWinner(userwin ,userChoice,compch);
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
            console.log("choice clicked");
            const userChoice=choice.getAttribute("id");
            playgame(userChoice);
    })
})