class Population{
    constructor(){
        this.rockets = [];
        this.popsize = 25;
        // this.popsize = 150;
        for(let i = 0; i<this.popsize; i++){
            this.rockets[i] = new Rocket();
            // this.rockets.push(rocket);
        }
    }

    run(){
        for(let i = 0; i<this.popsize; i++){
            this.rockets[i].update();
            this.rockets[i].show();
        }
    }

    makeLove(){
        let newRockets = [];
        for(var i =0; i<this.rockets.length; i++){
            let parentA_DNA = random(this.matingpool).dna;
            let parentB_DNA = random(this.matingpool).dna;
            let child_DNA = parentA_DNA.crossOver(parentB_DNA);
            child_DNA.mutation();
            // console.log(child_DNA);
            let child = new Rocket(child_DNA);
            newRockets.push(child);
        }
        // console.log(newRockets);
        // console.log(this.rockets.length);
        this.rockets = newRockets;
        // return newRockets;
    }

    evaluate(){
        let maxfit = 0;
        for(let i = 0; i<this.popsize; i++){
            this.rockets[i].calFitness();
            if(this.rockets[i].fitness > maxfit){
                // console.log(this.rockets[i])
                maxfit = this.rockets[i].fitness;
            }
        }
        console.log(maxfit);
        
        for(let i = 0; i<this.popsize; i++){
            this.rockets[i].fitness /=maxfit;
        }

        this.matingpool = [];
        
        for(let i = 0; i<this.popsize; i++){
            // console.log(this.rockets[i].fitness);
            let n = 100*this.rockets[i].fitness;
            for(let j = 0; j<n; j++){
                this.matingpool.push(this.rockets[i]);
            }
        }

        // console.log(this.matingpool);

    }
    

   
}