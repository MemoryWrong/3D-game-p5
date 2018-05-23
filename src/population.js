class Population{
    constructor(){
        this.rockets = [];
        this.popsize = 25;
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

    
   
}