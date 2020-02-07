// Pawsitively the worst
// Samuel Risling
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let start = true;
let end = false;
let main = false;
let ex,why;
let posX = 0;
let posY = 0;
let allow = 0;
let s = 1000;
let possibleBox = [200, 500, 800, 1100, 1400];

function spawnItem(){

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  ex = width/2;
  why = (height/2) * 1.5;
}

function timer(){
  
  s = s - (Math.round(deltaTime* 0.5).toFixed(2));

  textSize(30);
  text(s, width/2, height/4);
}

function character(ex, why){
  fill(0,0,0); 
  ellipse(ex,why, 50, 50);
  fill(255, 0, 0);
  ellipse(ex - 10, why - 10, 10, 10 );
  ellipse(ex + 10,why - 10, 10, 10);

}


function keyPressed(){
  if(keyCode === LEFT_ARROW) {
    if(allow > -2) {
      ex -= 300;
      allow --;
    }
  }

  if(keyCode === RIGHT_ARROW){
    if(allow < 2){
      ex += 300;
      allow ++;
    }
  }
  print(ex);
}

function ground(){
  fill(122,57,0);
  rect(0, (height / 2) * 1.5, windowWidth, 400);
}

function draw() {
  background(248, 252, 167);
  ground();
  character(ex, why);
  timer();
}