// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let fillOne, fillTwo, fillThree, fillFour;

function setup() {
  createCanvas(windowWidth, windowHeight);
}
function colorChange(){
  if(mouseX < width /2 && mouseY < height /2){
    fillOne = 255;
  }
  else {fillOne = 0;}
}
  if (mouseX > width >  2 )

function draw() {
  background(220);
  rect(0,0, width/2, height/2);
  rect(width/2, 0, width/2, height /2);
  rect(0, height/2, width/2, height /2);
  rect(width/2, height/2, width/2, height /2);
}
