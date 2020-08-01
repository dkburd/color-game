let numSquares = 6;

let colors = generateRandomColors(6);
// above for random below for hard coded colors
// [
//   "rgb(255, 0, 0)",
//   "rgb(255, 255, 0)",
//   "rgb(0, 255, 0)",
//   "rgb(0, 0, 255)",
//   "rgb(255, 0, 255)",
//   "rgb(0, 255, 255)",
// ];
let squares = document.querySelectorAll(".square");
let correctColor = pickColor();
let correctColorDisplay = document.getElementById("correctColorDisplay");
let messageDisplay = document.getElementById("message");
let h1 = document.querySelector("h1");
let resetButton = document.getElementById("reset");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function () {
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  correctColor = pickColor();
  correctColorDisplay.textContent = correctColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function () {
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  correctColor = pickColor();
  correctColorDisplay.textContent = correctColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
});

resetButton.addEventListener("click", function () {
  // generate all new colors
  colors = generateRandomColors(numSquares);
  // pick a new random color from arr
  correctColor = pickColor();
  correctColorDisplay.textContent = correctColor;
  //change colors of squares
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "#216353";
  resetButton.textContent = "get new colors";
  messageDisplay.textContent = "";
});

correctColorDisplay.textContent = correctColor;
for (var i = 0; i < squares.length; i++) {
  // add initial colors
  squares[i].style.backgroundColor = colors[i];
  //   add listener
  squares[i].addEventListener("click", function () {
    //grab color of click
    let clickedColor = this.style.backgroundColor;
    //compaire clicked color to correctColor
    if (clickedColor === correctColor) {
      messageDisplay.textContent = "correct";
      resetButton.textContent = "play again??";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "TRY AGAIN";
    }
  });
}
function changeColors(color) {
  //loop thru squares
  for (var i = 0; i < squares.length; i++) {
    //change to match given color
    squares[i].style.backgroundColor = color;
  }
}
function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
function generateRandomColors(num) {
  let arr = [];
  //repeat num times
  for (var i = 0; i < num; i++) {
    // push random colors into array

    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  //pick values for r g and b
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  //   add spaces after comas to make picked=== clicked, the DOM addes them in automatically when we assign a background color
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
