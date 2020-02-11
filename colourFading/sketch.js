// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let mousePos;
let opacL = 0;
let opacR = 0;
const FADESPEED = 5;
const FADEOUT = 10;

function drawRect(pos){
  if(pos === 0){
    fill(220,0,0,opacL);
  }
  else fill(255,0,0, opacL);
  
  rect(0,0, width/2, height);
  
  if(pos === 1){
    fill(220,0,0,opacR);
  }
  
  else fill(255,0,0,opacR);
  rect(width/2, 0, width/2, height);
}

function findMouse(){
  if(mouseX <= windowWidth/2){
    mousePos = 0;
    if(opacL < 255){
      opacL += FADESPEED;
    }
    if(opacR > 0){
      opacR -= FADEOUT;
    }
  }
  else {mousePos = 1;
    mousePos = 1;
    if(opacR < 255){
      opacR += FADESPEED;
    }
    if (opacL > 0){
      opacL -= FADEOUT;
      
    }
  }
  return mousePos;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  findMouse();
}

function draw() {
  background(0, 0, 0);
  drawRect(mousePos);
  print(findMouse());
}
