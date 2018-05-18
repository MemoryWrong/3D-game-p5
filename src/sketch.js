var brain;
var m1, m2, m3;
// var data;

function setup() {
    createCanvas(400,400);
    background(200);

    var inputs = [];
    var outputs = [];

    //initial the Single Perceptron Network
    // Data.getSample();
    // brain = new Perceptron(inputs, outputs)
    // brain.train();
    
    // 3个参数变量， 2 个隐藏神经元， 一个输出神经元
    var input_array = [1,1,1];
    brain = new NeuralNetwork(input_array.length,2,1);
    brain.feedForward(input_array);

    
    /**
     * this is matrix usage
     */
    // m3 = new Matrix(3,2);
    // m3.randomize();
    // m3.print();

    // var transport1 = Matrix.transpose(m3);
    // transport1.print(transport1);

    // var transport2 = Matrix.transpose(transport1);
    // transport2.print();
    
}

function draw() {
  // put drawing code here
}