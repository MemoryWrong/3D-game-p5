var cols = 20;
var rows = 20;
var unit = 40;
var debug;
var human = [];

function setup() {
  createCanvas(800, 800);
  background(200);

  //init human...
  for(let i = 0; i<20; i++){
    human.push(new Character(40*floor(random(0,20)), 40*floor(random(0,20))));
    // human.draw();
  }
  

}


function draw() {
  background(200);
  for(let i = 0; i < cols; i++){
    for(let j = 0; j<rows; j++){
      fill(200);
      rect(i*unit,j*unit,unit,unit);
      // fill(cols,rows,255);
    }
  }
  for(let i=0; i<human.length;i++){
    human[i].draw();
  }
  
  // noLoop();

}

function mousePressed(){
  for(let i =0; i<human.length; i++){
    // console.log(human[i])
    human[i].clicked();
  }
}