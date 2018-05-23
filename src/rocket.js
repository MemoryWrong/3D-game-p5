// The rocket have the DNA based on lifespan 
// if the lifespan is 200 frame DNA will apply 200 vector for each animation
class Rocket{
    constructor(dna){
        this.pos = createVector(width/2, height);
        this.vel = createVector();
        this.acc = createVector();
        this.lifespan =200;
        if(dna){
          this.dna = dna;
        }else{
          this.dna = new DNA();
          
        }
        // this.dna = dna;
        this.count = 0;
        this.fitness = 0;
        this.matingpool = [];
        
    }
  
    applyForce(force){
      this.acc.add(force);
    }
  
    update(){
      // this.vel.add(this.acc);
      this.applyForce(this.dna.genes[this.count]);
      this.count++;
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      // this.acc.mult(0);
      
    }
  
    show(){
      push();
      translate(this.pos.x, this.pos.y);
      rotate(this.vel.heading());
      rectMode(CENTER);
      fill(255);
      rect(0,0, 50,10);
      pop();
    }


   

    calFitness(target){
      var d = dist(this.pos.x, this.pos.y, width/2, 50);
      this.fitness = 1/d;
    }
  }