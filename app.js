let userscore=0;
let compscore=0;

const choices =document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userpoint =document.querySelector("#user-score");
const comppoint =document.querySelector("#comp-score");

const Drawgame =()=>{
    console.log("game was draw.");
    msg.innerText="Game Draw ! Play Again";
    msg.style.backgroundColor ="darkblue";
}
const showWinner =(userwin,choiceid,compchoice)=>{
    if(userwin){
        userscore++;
        userpoint.innerText=userscore;
        console.log("You Win !");
        msg.innerText =`You Win! your ${choiceid} defeat ${compchoice}`;
        msg.style.backgroundColor ="green";
        

    }else{
        compscore++;
        comppoint.innerText=compscore;  
        console.log("Computer Win !");
        msg.innerText =`You Lose! your ${choiceid} defeated by ${compchoice}`;
        msg.style.backgroundColor ="purple";
    }
};

const gencompChoice =()=>{
    //rock ,paper,scissors
    let options =["rock","paper","scissor"];
    const randIdx =Math.floor(Math.random()*3);
    return options[randIdx];
};

const playGame =(choiceid)=>{
    console.log("user choice =", choiceid);
    //generate computer choice
    const compchoice =gencompChoice();
    console.log("comp choice =" ,compchoice);
    if(choiceid === compchoice){
        //Draw
        Drawgame();
    }else{
        let userwin =true;
        if(choiceid==="rock"){
            //scissor ,paper
           userwin= compchoice==="paper" ? false:true;
        }else
        if(choiceid ==="paper"){
            //scissor,rock
            userwin= compchoice==="scissor" ?false :true;
        }
         if(choiceid ==="scissor"){
            //paper,rock
            userwin= compchoice==="rock" ?false :true;
        }
        showWinner(userwin,choiceid,compchoice);
    }
};

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const choiceid= choice.getAttribute("id");
        console.log("choice was clicked",choiceid);
        playGame(choiceid);
    });
});
