

var states = `hello, my name's Gau, What do you want to ask me?`;
var text = states.search("Gau");
console.log(text);


//function theprice(){
//  var total = document.getElementById("Myselect").value;
 // document.getElementById("lol").innerHTML = "this is your optoin:" + total;
//}


class drinks {
  todrink = true;

  getname(){console.log(`oh, this is ${this.name}, and you can drink`)};
  getname1(){console.log(`oh, this is ${this.name} that's a great drink, and you can give for your friends, too`)};
}

class coke extends drinks {
  name ="a coke";
}
class pepsi extends drinks{
   name = "a pepsi";
}

const cokes = new coke();
const pepsis = new pepsi();

console.log(cokes.todrink);
pepsis.getname();
cokes.getname1();

const tax = 55 / 1000;
let price = 0;

function priceaftertaxing(bwm, ferrari, taxing){

    if(bwm > 1000 || bwm > 999){
        console.log(`you got a bargain`);
    }else if(bwm < 999){
        console.log(`you must buy enough to get bargain`);
    }
  return bwm = Math.floor((price + bwm) * tax);
}

const total = priceaftertaxing(1500);
console.log(`${total}$ you have been taxed`)

const choices = ["paper", "rock", "scissors"];
const Displayofplayer = document.getElementById("playerDisplay");
const Computer = document.getElementById("Computer");
const result = document.getElementById("TheResult");

function click(Playeroption){
  
  choices = Number(choices);

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
   }
