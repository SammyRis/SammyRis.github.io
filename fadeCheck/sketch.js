// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let fillOne, fillTwo, fillThree, fillFour;
let opac = 255;
let onEnter = true;
let loops = 0;
let opacOff = 150;
let opacOffTwo = 150;
let opacOffThree = 150;
let opacOffFour = 150;

class quarters{
  constructor(q1,q2,q3,q4, fullFill, opacVal){
    this.q1 = false;
    this.q2 = false;
    this.q3 = false;
    this.q3 = false;
    this.fullFill = [255, 0, 0, 255];
    this.opacVal = 0;
  }
  fullFill(){
    return this.fullFill;
  }
  opacVal(){
    return this.opacVal;
  }

}

function setup() {
  createCanvas(windowWidth, windowHeight);
}


function colorChange(){
  if(mouseX < width /2 && mouseY < height /2){

    fillOne = [252, 15, 3, opac];
    opacOff = 255;
  }
  else {
    fillOne = [252, 15, 3, opacOff];
    if(loops < 255){
      loops += 1;
      opacOff -= 1;
    }
  }

  if (mouseX > width / 2 && mouseY < height / 2){

    fillTwo = [252, 15, 3, opac];
    opacOff = 255;
  }
  
  else{
    fillTwo = [252, 15, 3, opacOffTwo];
    if(loops < 255){
      loops += 1;
      opacOffTwo -= 1;
    }
  }

  if(mouseX < width / 2 && mouseY > height /2){
  
    fillThree = [252, 15, 3, opac];
    opacOff = 255;
  }
  
  else{
    fillThree = [252, 15, 3, opacOffThree];
    if(loops < 255){
      loops += 1;
      opacOffThree -= 1;
    }
  }
  if(mouseX > width/2 && mouseY > height/2){
    fillFour = [252, 15, 3, opac];
    opacOff = 255;
  }
  else{
    fillFour = [252, 15, 3, opacOffFour];
    if(loops < 255){
      loops += 1;
      opacOffFour -= 1;
    }
  }
}

function draw() {
  background(0);
  colorChange();
  fill(fillOne);
  rect(0,0, width/2, height/2);
  fill(fillTwo);
  rect(width/2, 0, width/2, height /2);
  fill(fillThree);
  rect(0, height/2, width/2, height /2);
  fill(fillFour);
  rect(width/2, height/2, width/2, height /2);
}
