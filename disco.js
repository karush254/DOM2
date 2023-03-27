let colors = ["red", "green", "blue", "yellow", "pink", "purple"];
let interval = setInterval(function() {
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.getElementById("disco-light").style.backgroundColor = randomColor;
}, 100);

let colors1 = ["red", "green", "blue", "yellow", "pink", "purple"];
let interval1 = setInterval(function() {
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.getElementById("disco-light1").style.backgroundColor = randomColor;
}, 300);

let colors2 = ["green","black","red", "green", "blue", "yellow", "pink", "purple"];
let interval2 = setInterval(function() {
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.getElementById("disco-light2").style.backgroundColor = randomColor;
}, 400);