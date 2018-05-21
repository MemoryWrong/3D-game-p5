class Character {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.isSelected = false;
    }

    draw(){
        fill(0);
        rect(this.x, this.y, 40,40);
    }

    move(x,y){
        this.x +=x;
        this.y +=y;
    }

    clicked(){
        if(mouseX > this.x && mouseX <this.x +40 && this.y<mouseY && mouseY <=this.y+40){
            console.log('buble', this.x, this.y);
            this.isSelected = true;
        }
    }

    attack(){

    }

    isDead(){
        if(this.health <= 0){
            return true;
        }
        else{
            return false;
        }
    }

    

}