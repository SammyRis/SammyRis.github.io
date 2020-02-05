// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let ex,why;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ex = width/2;
  why = height/2;
}


function character(ex, why){
  ellipse(ex,why, 50, 50);
  fill(255, 0, 0);
  ellipse(ex - 10, why - 10, 10, 10 );
  ellipse(ex + 10,why - 10, 10, 10);
  fill(0,0,0); 
}


function keyPressed(){
  if(keyIsDown(LEFT_ARROW)) {
    ex -= 3;
  }

  if(keyIsDown(RIGHT_ARROW)){
    ex += 3;
  }
  if(keyIsDown(UP_ARROW)){
    why-=3;
  }
  if(keyIsDown(DOWN_ARROW)){
    why += 3;
  }
}
function draw() {
  
  background(220);
  character(ex, why);
  keyPressed();
}
