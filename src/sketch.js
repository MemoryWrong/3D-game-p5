var rocket;
var population;
var count = 0;
var lifep;

function setup() {
  createCanvas(800, 400);
  population = new Population();

  lifep = createP();

  console.log(population)
}

function draw() {
  background(0);
  // rocket.update();
  // rocket.show();
  count++;
  if(count == population.rockets[0].lifespan){
    population = new Population();
    count = 0;
  }
  lifep.html(count);
  population.run();
}

