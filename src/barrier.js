class Barrier {
    constructor(x, y){
        // this.blocks = [];
        this.x = x;
        this.y = y;
        this.w = 150;
        this.h = 20;
        
    }
    draw(){
        fill(255);
        rect(this.x, this.y, this.w, this.h);
        // rect(100,200, 50, 20);
    }

    isCollision(obj){
        if (obj.pos.x > this.x && obj.pos.x < this.x + this.w && obj.pos.y > this.y && obj.pos.y < this.y + this.h) {
            // this.crashed = true;
            return true;
        }else{
            return false;
        }
    }

    // create(){

    // }
}