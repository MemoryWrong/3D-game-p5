// The rocket have the DNA based on lifespan 
// if the lifespan is 200 frame DNA will apply 200 vector for each animation
class Rocket{
    constructor(){
      this.pos = createVector(width/2, height);
      this.vel = p5.Vector.random2D();
      this.acc = createVector();
  
    }
  
    applyForce(force){
      this.acc.add(force);
    }
  
    update(){
      // this.vel.add(this.acc);
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.mult(0);
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
  }