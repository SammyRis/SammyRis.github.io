// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let x = 0;
let y = 0;
let stateX = 1;
let stateY = -1;

function setup() {
  print("jhi");
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  rect(x,y, 40, 40);
  

  if( stateX === 1 && x < width - 40){
    x ++;
    if(x < width - 41){
      stateX = stateX * -1;
    }
  }
  else if(stateX === -1 && width > 0){
    x--;
    if( x < 1){
      stateX = stateX * -1;
    }
    
  }
  if(stateY === -1 && y < height - 40){
    y --;
    if(stateY < height - 41){
      stateY = stateY * -1;
    }
  }
  else if(stateY === 1 && y > 0){
    y ++;
  }
  if(stateY > 1){
    stateY = stateY * -1;
  }
    
}  

