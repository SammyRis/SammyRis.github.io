// Pawsitively the worst
// Samuel Risling
// Feb 10, 2020
//
// Extra for Experts:
// Getting the stupid cat to say 'Cronch' took so long I went to college, had kids, and died before it would work.

class FoodBowl{
  constructor(){
    this.img = "Images/bowlFull.png";
    this.full = true;
  }

  isFull(){
    return this.full;
  }



  currImg(){
    return this.img;
  }

  emptyMe(){
    this.img = "Images/bowlEmpty.png";
    this.isFull = false;
    workingTime = 0;
  }

  fillMe(){
    this.img = "Images/bowlFull.png";
    this.isFull = true;
  }

}

class TextImages{
  getEmpty(){return loadImage("Images/empty.png")}
  getMeow(){return loadImage("Images/meow.png")}
  getCronch(){return loadImage("Images/cronch.png")}

  backToEmpty(){
    textyText = this.getEmpty()
  }

}


let start = true;
let end = false;
let main = false;
let bowlStat = true;
let ex,why, textyText, catR, catL, poster, bowl, cronch, bowlX, meow;
let colours = [[66,206,245], [201,141,62], [255,161,140], [140,255,192]];
let currColour = colours[1];
let left = false;
let right = true;
let workingTime = 0;
let fBowl = new FoodBowl();
let tImages = new TextImages();



function setup() {
  createCanvas(windowWidth, windowHeight);
  ex = width/2;
  why = (height/2) * 1.2;
  catR = loadImage("Images/nwz0GOP_5x.png");
  catL = loadImage("Images/image.png");
  poster = loadImage("Images/fishPoster.png");
  textyText = tImages.getEmpty();
  bowl = loadImage(fBowl.currImg());
  bowlX = height * 0.55;
}

function character(ex, why){
  if(left){
    image(catL, ex, why, 300, 300);
  }

  if(right){
    image(catR, ex, why, 300, 300);
  }
}



function keyPressed(){
  if(keyIsDown(LEFT_ARROW)){
    ex -= 6;
    left = true;
    right = false;
  }

  if(keyIsDown(RIGHT_ARROW)){
    ex += 6;
    right = true;
    left = false;
  }
  
  if (keyIsDown(UP_ARROW)){
    if(ex < bowlX - 30){
      if(fBowl.isFull){
        textyText = tImages.getCronch();
        fBowl.emptyMe();
        bowl = loadImage(fBowl.currImg());
      }
    }
  }
  if (key === '1' || key === '2' || key === '3' || key === '4'){
    currColour = colours[int(key) - 1];
  } 
}

function ground(){
  fill(122,57,0);
  rect(0, (height / 2) * 1.5, windowWidth, 400);
}


function draw() {
  background(currColour[0], currColour[1], currColour[2]);
  image(poster, width * 0.02, height * 0.02, 400, 400);
  image(textyText, ex + 20, why -170, 400, 400);
  ground();
  image(bowl, width * 0.02, bowlX, 300, 300);
  character(ex, why);
  keyPressed();
  if(frameCount % 60 === 0){
    tImages.backToEmpty();
  }
  textSize(32);
  fill(0);
  text("Samuel Risling", 0 + 20, windowHeight - 20);
}