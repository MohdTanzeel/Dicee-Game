let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomImages1 = "images/dice" + randomNumber1 + ".png";
let image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImages1)

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomImages2 = "images/dice" + randomNumber2 + ".png";
let image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImages2);

if (randomImages1 > randomImages2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomImages2 > randomImages1) {
  document.querySelector("h1").innerHTML = "🚩 Play 2 Wins!";
} 
else {
  document.querySelector("h1").innerHTML = "Draw";
}