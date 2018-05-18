new p5();
class Perceptron {
    constructor(inputs, outputs){
        // learning data , each element first element in the child array
        // is the first parameter, second is the second parameter
        // the last one is the bias parameter
        this.inputs = inputs;

        // 1 represent blue flower, -1 represent red flower
        this.outputs = outputs;

        console.log(this.inputs, this.outputs);
        //all parameters weights related....
        this.weights =  [];
        for(let i = 0; i< 2; i ++){
           let w_i = random(-1,1);
            this.weights.push(w_i);
        }
        // add b for bias value y = x1 * w1 + x2 * w2 + b;
        // this.weights.push(random(-1,1));
    }

    sigmoid(sum){
        return 1/(1+Math.exp(-sum));
    }

    sign(x){
        if(x>=0){
            return 1;
        }else{
            return -1;
        }
    }

    guess(input){
        var sum = 0;
        for(let i =0; i<this.weights.length; i++){
            
            sum+=input[i]*this.weights[i];

        }

        
        // var prediction =  this.sigmoid(sum);

        // console.log(sum);
        // adjust to integer
        return this.sign(sum);
    }


    train(){

        console.log('start learning ...', this.weights);
        var learning_rate = 0.01;

        // training times for machine learning...
        for(let i = 0; i<10000;i++){

            //pick a random data.
            var index = floor(random(0,this.inputs.length));
            var data_sample = this.inputs[index];
            var target = this.outputs[index];
            var prediction;

            //guess the output
            var prediction = this.guess(data_sample);
            // console.log("index",index);
            
            // console.log("prediction",prediction);

            // calculate the gap between predication and real result
            var error = target - prediction;
            // console.log("error",error);
            
            
            // tune all the weights
            for(let i=0; i < this.weights.length; i++){
                this.weights[i] += error * data_sample[i] * learning_rate;
                // console.log('this is ',this.weights[i]);
            }
            // console.log('modifying...',this.weights);

           
            // fill(0);
            // line(0,this.weights[2], this.weights[0], this.weights[1]+this.weights[2]);
        }

        console.log('finish',this.weights);
        // fill(0);
        // line(0,this.weights[2], this.weights[0], this.weights[1]+this.weights[2]);

    }
}