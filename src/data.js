class Data{
    constructor(){

    }

    //let the system predic the next set of random points are 
    // White	#FFFFFF	(255,255,255)
    // Red	#FF0000	(255,0,0)
    // Lime	#00FF00	(0,255,0)
    // Blue	#0000FF	(0,0,255)
    
    static getSample(){
        let inputs = [];
        let outputs = [];
        for(let i=0; i<10; i++){
            let x = random(0,width);
            let y = random(0,height);
            inputs.push([x,y]);
            
            if(x>2*y){
              //red type
              fill(255,0,0);
              ellipse(x, y, 10,10);
              outputs.push(1);
            }else{
              //green type
              fill(255,255,0);
              ellipse(x, y, 10,10);
              outputs.push(-1);
            }
        }
    }

    static getTestData(){
        var testData =[];
        for(let i=0; i<100; i++){
            let x = random(0,width);
            let y = random(0,height);
            testData.push([x,y]);
        }
        return testData;
    }
}