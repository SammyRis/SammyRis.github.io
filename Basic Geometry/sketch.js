// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let ex,why;
let posX = 0;
let posY = 0;
let moveAllowR = true;
let moveAllowL = true;

function isOnEdge() {
  if(keyIsDown(LEFT_ARROW)){
    if (moveAllowL){
      posX --;
    }
  }

  if(keyIsDown(RIGHT_ARROW)){
    posX ++;
  }
  if(posX < 0){
    moveAllowL = false;
    moveAllowR = true;
  }
  else if (posX > 0){
    moveAllowR = false;
    moveAllowL = true;
  }
  else{
    moveAllowL = true;
    moveAllowR = true;
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  ex = width/2;
  why = (height/2) * 1.5;
}


function character(ex, why){
  ellipse(ex,why, 50, 50);
  fill(255, 0, 0);
  ellipse(ex - 10, why - 10, 10, 10 );
  ellipse(ex + 10,why - 10, 10, 10);
  fill(0,0,0); 
}


function keyPressed(){
  if (moveAllowL){
    if(keyIsPressed(LEFT_ARROW)) {
      ex -= 50;
    }
  }
  if (moveAllowR){
    if(keyIsDown(RIGHT_ARROW)){
      ex += 50;
    }
  }
}
function ground(){
  rect(0, (height / 2) * 1.5, windowWidth, 400);
}

function draw() 
{
  
  background(248, 252, 167);
  ground();
  character(ex, why);
  keyPressed();
}