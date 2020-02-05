// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let ex = 120;
let why = 120;
let r = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mousePressed(){
  if(r === 0) r = 255;  
  else r = 0;
}

function draw() {
  background(220);
  fill(r,0,0);
  ellipse(ex, why, 40, 40);
  
  if(keyIsDown(LEFT_ARROW)) {
    ex -= 3;
  }

  if(keyIsDown(RIGHT_ARROW)){
    ex += 3;
  }
  if(keyIsDown(UP_ARROW)){
    why -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    why += 3;
  }

}
