// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let fillC = 0;
let gridSpacing;

function shapeSizing(){
  for(let i = 2; i < 20; i++){
    if(width%i === 0 ){
      return i;
    }
  }
  return 0;
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}
function keyPressed(){
  return true;
}

function mouseClicked(){
  if(mouseButton === LEFT && keyIsDown(16)){
    if(gridSpacing < width){
      gridSpacing += 5;
    }
  }
  else if(mouseButton === LEFT){
    if(gridSpacing > 5){
      gridSpacing -= 5;
    }
  }

}

function circleGrid(){
  for(let i = 0; i < height; i+= gridSpacing){
    for(let a = 0; a < width; a+= gridSpacing){
      fill(fillC);
      if(keyPressed()){
        fill(random(255), random(255), random(255));
      }
      rect(a +gridSpacing/2, i + gridSpacing/2,gridSpacing,gridSpacing);
    }
  }
}

function draw() {
  gridSpacing = shapeSizing() * 10;
  circleGrid();
}
