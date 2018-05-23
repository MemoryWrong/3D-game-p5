class DNA {
    constructor(){
        this.genes = [];
        // cause the rocket life is 400
        for(let i = 0; i<200; i++){
            
            this.genes[i] = p5.Vector.random2D();
            this.genes[i].setMag(0.1);
            // this.rockets.push(rocket);
        }
    }

    crossOver(partner){
        // console.log(partner.genes.length)
        // console.log(this.genes.length)
        let newDNA = new DNA(partner.genes.length);
        let mid = floor(random(this.genes.length));

        for(let i = 0; i<this.genes.length; i++){
            if(i>mid){
                newDNA[i] = this.genes[i];
            }else{
                newDNA[i] = partner.genes[i];
            }
        }
        // console.log(newDNA);
        return newDNA;
    }
}