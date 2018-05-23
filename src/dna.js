class DNA {
    constructor(){
        this.genes = [];
        // cause the rocket life is 400
        for(let i = 0; i<400; i++){
            
            this.genes[i] = p5.Vector.random2D();
            this.genes[i].setMag(0.1);
            // this.rockets.push(rocket);
        }
    }

    crossOver(partner){
        let newDNA = new DNA(this.partner.genes.length);
        let mid = floor(random(this.genes.length));

        for(let i = 0; i<this.genes.length; i++){
            if(i>mid){
                newDNA[i] = this.genes[i];
            }else{
                newDNA[i] = partner.genes[i];
            }
        }
        return newDNA;
    }
}