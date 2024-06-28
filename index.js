var randomNo1 = Math.floor(6*Math.random()) +1;
var img1= document.querySelectorAll("img")[0];
img1.setAttribute("src", "images/dice"+randomNo1+".png");

var randomNo2 = Math.floor(6*Math.random()) +1;
var img2= document.querySelectorAll("img")[1];
img2.setAttribute("src", "images/dice"+randomNo2+".png");

if(randomNo1 > randomNo2){
    document.querySelector("h1").innerHTML= "Player 1 Wins";
}
else if(randomNo1 < randomNo2){
    document.querySelector("h1").innerHTML= "Player 2 Wins";
}
else if(randomNo1 === randomNo2){
    document.querySelector("h1").innerHTML= "Draw!";
}

