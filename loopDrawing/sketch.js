// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let vin;

function loopDraw(){
  for(let y = 0; y<height; y++){
    for(let x = 0; x<width; x ++){
      let color = vin.get(x,y);
      print(color);
      //fill(color);
      stroke(color);
      rect(x,y,1,1);
    }
  }
}

function preload(){
  print("hey");
  vin = loadImage("assets/vin.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  loopDraw();
}
