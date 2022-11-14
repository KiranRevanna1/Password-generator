const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U",
"V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v",
"w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
"~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
"{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let text1 = document.getElementById('rect1');
let text2 = document.getElementById('rect2');
let randomText = "";
let rand = "";
function b2(){
   for(let i=0; i <= 15; i++){
    let randomdata = Math.floor(Math.random() * characters.length);
    randomText += characters[randomdata];
   }
   text1.textContent = randomText;
   randomText = "";
   for(let i=0; i <= 15; i++){
    rand = Math.floor(Math.random() * characters.length);
    randomText += characters[rand];
   }
   text2.textContent = randomText;
   randomText = "";
}



