//create a list of DOM
const choices = ["paper", "rock", "scissors"];
const Displayofplayer = document.getElementById("playerDisplay");
const Computer = document.getElementById("Computer");
const result = document.getElementById("TheResult");
const playerscore = document.getElementById("Player");
const computerscore = document.getElementById("Computer");
var player = 0;
var computer = 0;

function clickGame(Playeroption){

   const Computerchoice = choices[Math.floor(Math.random() * 3)];

   var theresult = "";
   if(Playeroption === Computerchoice){
         theresult = `IT'A TIE`;
   }else{
    switch(Playeroption){
       case "rock":
        theresult = (Computerchoice === "scissors") ? "YOU WIN!" : "YOU'RE LOSER !"
         break;
          case "paper":
           theresult = (Computerchoice === "rock") ? "YOU WIN!" : "YOU'RE LOSER !"
          break;
            case "scissors":
             theresult = (Computerchoice === "paper") ? "YOU WIN!" : "YOU'RE LOSER !"
             break;
           }
    }
    Displayofplayer.textContent = `Player: ${Playeroption}`;
    Computer.textContent = `Computer: ${Computerchoice}`;
    result.textContent = theresult; 

result.classList.remove("green","red");
 
   switch(theresult){
    case "YOU WIN!":
     result.classList.add("green");
     player++;
     playerscore.textContent = player;
     break;
     case "YOU'RE A LOSER !":
     result.classList.add("red");
     computer ++;
     computerscore.textContent = computer;
     break;
   }
   }
