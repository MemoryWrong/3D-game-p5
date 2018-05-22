var rocket;
var population;

function setup() {
  createCanvas(400, 400);
  rocket = new Rocket();
  population = new Population();
  console.log(population)
}

function draw() {
  background(0);
  // rocket.update();
  // rocket.show();
  population.run();
}

