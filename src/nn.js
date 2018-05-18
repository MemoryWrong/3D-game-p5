// multi-layer neural network system
// based on matrix class 

class NeuralNetwork{
    /**
     * 
     * @param {*number } input_nodes 
     * @param {*number} hidden_nodes 
     * @param {*number} output_nodes 
     */
    constructor(input_nodes, hidden_nodes, output_nodes ){
        this.input_nodes = input_nodes;
        this.hidden_nodes = hidden_nodes;
        this.output_nodes = output_nodes;

        // hidden layer matrix = Matrix[R][C]; 
        // according the graphic, hidden layer matrix.cols = number of inputVariables; (input_nodes)
        // according the graphic, hidden layer matrix.rows = number of hidden neurons; (hidden_nodes)
        this.weights_ih = new Matrix(this.hidden_nodes, this.input_nodes);
        this.weights_ho = new Matrix(this.output_nodes, this.hidden_nodes);
        this.weights_ih.randomize();
        this.weights_ho.randomize();

        console.log(this.weights_ih, this.weights_ho);
        
        this.bias_ih = new Matrix(this.hidden_nodes, 1);
        this.bias_ho = new Matrix(this.output_nodes, 1);
        this.bias_ih.randomize();
        this.bias_ho.randomize();
    }

    sigmoid(x){
        return 1/(1+exp(-x));
    }

    feedForward(input_array){
        // generate hidden layer
        let input_matrix = Matrix.arrayToMatrix(input_array);
        let hidden = Matrix.multiply(this.weights_ih, input_matrix);
        hidden.add(this.bias_ih);
        hidden.map(this.sigmoid);
        hidden.print();

        let output = Matrix.multiply(this.weights_ho, hidden);
        output.add(this.bias_ho);
        output.map(this.sigmoid);
        output.print();

        //guess
        return output.toArray();
    }
}