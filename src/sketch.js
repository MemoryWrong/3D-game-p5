var rocket;
var population;
var count = 0;
var lifep;
var target; 
var gencode = 0;
var barriers = [];

function setup() {
  createCanvas(800, 400);
  population = new Population();
  lifep = createP();
  target = createVector(width/2, 50);

  let b1 = new Barrier(100, 100);
  let b2 = new Barrier(300, 200);
  let b3 = new Barrier(500, 100);
  
  barriers.push(b1);
  barriers.push(b2);
  barriers.push(b3);
  console.log(barriers)
  

  // console.log(population)
}

function draw() {
  for(let i = 0; i<population.rockets.length;i++){
    population.rockets[i].barriers = barriers;
  }
  // console.log(population.rockets[0].barriers)
  background(0);
  // rocket.update();
  // rocket.show();
  for(let i = 0; i<barriers.length;i++){
    push()
    fill(255);
    
    barriers[i].draw();
    // rect(100,200, 50, 20);
  }

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
  lifep.html('Life Span Frames:'+count);
  population.run();

  textSize(16);
  fill(255);
  text('generation:'+gencode, 10, 30);
  textSize(16);
  fill(255);
  text('sample:'+1500, 10, 50);
  fill(255);
  // text('best kid:'+population.bestKid, 10, 50);
  // console.log(population.bestKid)
}

