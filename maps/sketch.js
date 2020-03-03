// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let keyMap = new Map();


function keyPressed(){
  if(key === "a"){
    keyMap.set("salmon",5);
  }
  else if(key === "s"){
    keyMap.set("palegreen", 5);
  }
  else if(key === "d"){
    keyMap.set("magenta", 5);
  }
}

function renderMap(){
  let count = 0;
  for(let i of keyMap){

    let x = 50 + count * 100;

    fill(i[0]);
    print(i[0]);
    line(x, height/2, x,height/2 - i[1]);
    
    count ++;
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(25);
}

function draw() {
  background(220);
  renderMap();
}
