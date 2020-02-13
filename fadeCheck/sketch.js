// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let fillOne, fillTwo, fillThree, fillFour;
let opac = 0;
let onEnter = true;
let orBlue = [93,214,245];
let orYellow = [245, 232, 93];
let orPurple = [225, 107, 255];
let loops = true;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function colorChange(){
  if(mouseX < width /2 && mouseY < height /2){
    if(onEnter && opac < 255){
      opac = 0;
      onEnter = false;
      loops = true;
    }
    if(opac < 255){
      opac += 5;
    }
    else if(opac === 255){
      opac ++;
      onEnter = true;
    }
    fillOne = [245, 232, 93, opac];
  }
  else {fillOne = [225, 107, 255, 233];}

  if (mouseX > width / 2 && mouseY < height / 2){
    if(onEnter && opac < 255){
      opac = 0;
      onEnter = false;
      loops = true;
    }
    if(opac < 255){
      opac += 5;
    }
    else if(opac === 255){
      opac ++;
      onEnter = true;
    }
    fillTwo = [245, 232, 93];
  }
  else{
    fillTwo = [225, 107, 255, 20];
  }
  if(mouseX < width / 2 && mouseY > height /2){
    fillThree = [245, 232, 93];
  }
  else{
    fillThree = [225, 107, 255, 20];
  }
  if(mouseX > width/2 && mouseY > height/2){
    fillFour = [245, 232, 93];
  }
  else{
    fillFour = [225, 107, 255, 233];
  }
}
function draw() {
  background(93,214,245);
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
