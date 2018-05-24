var rocket;
var population;
var count = 0;
var lifep;
var target; 

function setup() {
  createCanvas(800, 400);
  population = new Population();

  lifep = createP();
  target = createVector(width/2, 50);
  // console.log(population)
}

function draw() {
  background(0);
  // rocket.update();
  // rocket.show();
  ellipse(target.x,target.y, 20,20);
  count++;
  if(count == population.rockets[0].lifespan){
    population.evaluate();
    // console.log('pool',population.matingpool);
    population.makeLove();
    
    population = new Population();
    count = 0;
  }
  lifep.html(count);
  population.run();
}

