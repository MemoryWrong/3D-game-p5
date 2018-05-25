class Barrier {
    constructor(x, y){
        // this.blocks = [];
        this.x = x;
        this.y = y;
        this.w = 50;
        this.h = 20;
        
    }
    draw(){
        rect(this.x, this.y, this.w, this.h);
    }

    isCollision(obj){
        if (obj.pos.x > rx && obj.pos.x < rx + rw && obj.pos.y > ry && obj.pos.y < ry + rh) {
            // this.crashed = true;
            return true;
        }else{
            return false;
        }
    }

    // create(){

    // }
}