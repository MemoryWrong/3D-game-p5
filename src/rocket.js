// The rocket have the DNA based on lifespan 
// if the lifespan is 200 frame DNA will apply 200 vector for each animation
class Rocket{
    constructor(dna){
        this.pos = createVector(width/2, height-50);
        this.vel = createVector();
        this.acc = createVector();
        this.lifespan =200;
        this.completed = false;
        this.crashed = false;
        this.barriers = [];
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
      var d = dist(this.pos.x, this.pos.y, width/2, 50);
      // console.log(d)
      // If distance less than 10 pixels, then it has reached target
      if (d < 10) {
        this.completed = true;
        this.pos.x = width/2;
        this.pos.y = 50;
        // console.error(this)
      }

      // if(this.pos.y == 0){
      //   this.completed == true;
      //   this.pos.y = 0;
        
      // }
        // Rocket hit the barrier
      // if (this.pos.x > rx && this.pos.x < rx + rw && this.pos.y > ry && this.pos.y < ry + rh) {
      //   this.crashed = true;
      // }
      // Rocket has hit left or right of window
      for(let i = 0; i<this.barriers.length;i++){
        
        if(this.barriers[i].isCollision(this)){
          this.crashed = true;
          this.pos.x = this.pos.x;
          this.pos.y = this.pos.y;

        }
      }
      if (this.pos.x > width || this.pos.x < 0) {
        this.crashed = true;
      }
      // Rocket has hit top or bottom of window
      if (this.pos.y > height || this.pos.y < 0) {
        this.crashed = true;
      }
      if(!this.completed && !this.crashed){
        this.applyForce(this.dna.genes[this.count]);
        this.count++;
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
        this.vel.limit(4);
      }
      
      
    }
  
    show(){
      push();
      translate(this.pos.x, this.pos.y);
      rotate(this.vel.heading());
      rectMode(CENTER);
      fill(255,100);
      noStroke();
      rect(0,0, 20,5);
      pop();
    }


   

    calFitness(target){
      // var d = dist(this.pos.x, this.pos.y, target.x, target.y);
      var d = dist(this.pos.x, this.pos.y, width/2, 50);

      // Maps range of fitness
      // this.fitness = map(d, 0, width, width, 0);
      this.fitness = map((height-this.pos.y), 0,(height-50),0,1);
      this.fitness =  Math.pow(this.fitness,3)*1000
      // this.fitness = map((height-this.pos.y), 0, height,0,1);
      // If rocket gets to target increase fitness of rocket
      if (this.completed) {
        this.fitness *= 10;
      }
      // If rocket does not get to target decrease fitness
      if (this.crashed) {
        this.fitness /= 10;
      }

      // console.log(this.fitness);
    }
  }