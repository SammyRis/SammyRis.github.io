// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let pinwheel = [];
let count = 0;
let currImg = 0;
let lastMouseX;
let speed;

function getLastX(){
  if(count === 1){
    lastMouseX = mouseX;
  }
  return lastMouseX;
  
}
function preload(){
  for(let i = 0; i < 9; i ++){
    pinwheel.push(loadImage("assets/pin-0" + i + ".png"));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(240);
}

function draw() {
  speed = map(mouseX,1, width, 1, 2);
  background(0);
  if(count > speed){
    if(currImg > 7){
      currImg = 0;
    }
    else{
      currImg += 1;
    }
    count = 0;
  }
  
  
  count ++;
  imageMode(BOTTOM);
  
  image(pinwheel[currImg], width/2, height/4, 500, 500);
}
