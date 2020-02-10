var randomNumer1 = Math.floor((Math.random()*6)+1);
var diceName1 = "dice"+randomNumer1+".png";

var randomNumer2 = Math.floor((Math.random()*6)+1);
var diceName2 = "dice"+randomNumer2+".png";

﻿
document.querySelector(".img1").setAttribute("src" , diceName1);
document.querySelector(".img2").setAttribute("src" , diceName2);

if(randomNumer1 < randomNumer2){
  document.querySelector("h1").innerHTML = "Player 2 Win";
}
else if(randomNumer1 > randomNumer2){
  document.querySelector("h1").innerHTML = "Player 1 Win";
}
else{
 document.querySelector("h1").innerHTML = "DRAW";
}
