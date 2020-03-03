// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let seconds = 0;
let secondsRotation = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  push();
  translate(width/2, height/2);
  ellipseMode(CENTER);
  ellipse(0,0,width*0.3, width*0.3);
  
  for(let i = 0; i < 60; i++){
    if(i%5 === 0){
      strokeWeight(3);
      line(width *0.15,0,width*0.13,0);
    }
    else{
      strokeWeight(1);
      line(width *0.15,0,width*0.14,0);
    }
    rotate(radians(6));
  }
  
  push();
  stroke(255,0,0);
  strokeWeight(2);
  rotate(radians(270));
  rotate(radians(second() * 6));
  line(0,0, width*0.10,0);
  pop();

  push();
  stroke(0,255,0);
  strokeWeight(2);
  rotate(radians(270));
  rotate(radians(minute() * 6));
  line(0,0, width*0.13,0);
  pop();
  
  pop();
}
