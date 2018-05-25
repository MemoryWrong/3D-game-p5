var rocket;
var population;
var count = 0;
var lifep;
var target; 
var gencode = 0;

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
    let newGeneration = population.makeLove();
    gencode ++;
    
    population = new Population(newGeneration);
    count = 0;
  }
  lifep.html(count);
  population.run();

  textSize(32);
  fill(255);
  if(gencode == 1){
    text('初代火影', 10, 30);
  }else{
    text(gencode+'代火影', 10, 30);

  }
}

