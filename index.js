var p1 = Math.floor(Math.random() * 6) + 1;
var p2 = Math.floor(Math.random() * 6) + 1;

var randomImg1 = "dice" + p1 + ".png";
var randomImg2 = "dice" + p2 + ".png";

document.querySelectorAll(".dice")[0].lastElementChild.setAttribute("src", "./images/"+randomImg1);
document.querySelectorAll(".dice")[1].lastElementChild.setAttribute("src", "./images/"+randomImg2);

if(p1>p2){
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
}
else if (p1<p2){ 
    document.querySelector("h1").innerHTML = "Player 2 wins!🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}
