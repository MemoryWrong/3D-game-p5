class DNA {
    constructor(genes){
        this.genes = [];
        // cause the rocket life is 400
        // for(let i = 0; i<200; i++){
            
        //     this.genes[i] = p5.Vector.random2D();
        //     this.genes[i].setMag(0.2);
        //     // this.rockets.push(rocket);
        // }

        if (genes) {
            this.genes = genes;
          }
          // If no genes just create random dna
          else {
            this.genes = [];
            for (var i = 0; i < 200; i++) {
              // Gives random vectors
              this.genes[i] = p5.Vector.random2D();
              // Sets maximum force of vector to be applied to a rocket
              this.genes[i].setMag(0.2);
            }
        }
    }

    crossOver(partner){
        // console.log(partner.genes.length)
        // console.log(this.genes.length)
        let mid = floor(random(this.genes.length));
        let newGenes = [];

        for(let i = 0; i<this.genes.length; i++){
            if(i>mid){
                newGenes[i] = this.genes[i];
            }else{
                newGenes[i] = partner.genes[i];
            }
        }
        // console.log(newDNA);
        return new DNA(newGenes);
    }

    mutation() {
        for (var i = 0; i < this.genes.length; i++) {
          // if random number less than 0.01, new gene is then random vector
          if (random(1) < 0.01) {
            this.genes[i] = p5.Vector.random2D();
            this.genes[i].setMag(0.2);
          }
        }
    }
}