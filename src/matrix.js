// fill(), map(), reduce(), filter()
class Matrix{
    constructor(rows, cols){
        this.rows = rows;
        this.cols = cols;
        this.data = [];

        for(let i = 0; i<this.rows; i++){
            this.data[i] = []
            for(let j = 0; j<this.cols; j++){
                this.data[i][j] = 0;
            }
        }
    }
    static arrayToMatrix(arr){
        let m = new Matrix(arr.length,1);
        for(let i = 0; i<arr.length; i++){
            m.data[i][0] = arr[i]
            console.log('here',arr[i]);
        }
        return m;
    }
    toArray(){
        let arr = [];
        for(let i = 0; i<this.rows; i++){
            for(let j = 0; j<this.cols; j++){
                arr.push(this.data[i][j]);
            }
        }
        return arr;
    }
    /**
     * for matrix A*B != B*A;
     * only if the A.cols = B.rows;
     * finish A.row1 * (B.col1 ) then A.row2 * (B.col2)
     * @param {*} n 
     */
    static multiply(A, B){
        if(A instanceof Matrix && B instanceof Matrix){
            //n.matrix
            if(A.cols !== B.rows){
                console.log('A cols must equal to B rows', A.cols, B.rows);
                return undefined;
            }else{
                console.log('A cols equal to B rows', A.rows, B.cols);
                // result_matrix = new Matrix(A.rows, B.cols);
                // var A = this;
                // var B = n;
                var R = new Matrix(A.rows, B.cols);
                // A rows
                for(let i = 0; i<R.rows; i++){
                    // B cols
                    for(let j = 0; j<R.cols; j++){

                        let sum = 0;
                        // A cols = B rows
                        for(let k = 0; k< A.cols; k++){
                            console.log(i, k, k, j);
                            sum += A.data[i][k]*B.data[k][j];
                        }
                        R.data[i][j] = sum;
                    }
                }
                // console.table(R.data);
                return R;
            }
        }else{
            console.log('not matrix, cannot multiply');
        }
    }
    
    //one matrix transpose twice will be the same matrix
    static transpose(M){
        let R = new Matrix(M.cols, M.rows);
        for(let i = 0; i<M.cols; i++){
            for(let j = 0; j<M.rows; j++){
                // console.log(i,j)
                R.data[i][j] = M.data[j][i];
            }
        }
        // console.table(R.data);
        return R;
    }

    


    // operate data object itself
    // map value of itself matrix using function 
    add( B){
        if( B instanceof Matrix){
            console.log('Matrix A add Matrix B');
            //if it is matrix + matrix
            for(let i = 0; i<this.rows; i++){
                for(let j = 0; j<this.cols; j++){
                    console.log(this.data[i][j], B.data[i][j]);
                    this.data[i][j] += B.data[i][j];
                }
            }
        }else{
            console.log('cannot add not matrix');
            console.log(this.data, n);
            console.log('add number');
            for(let i = 0; i<this.rows; i++){
                for(let j = 0; j<this.cols; j++){
                    this.data[i][j] +=n;
                }
            }
        }
    }

    map(func){
        for(let i = 0; i<this.rows; i++){
            for(let j = 0; j<this.cols; j++){
                let val = this.data[i][j];
                this.data[i][j] = func(val);
            }
        }
    }

    multiply(n){
        for(let i = 0; i<this.rows; i++){
            for(let j = 0; j<this.cols; j++){
                this.data[i][j] *=n;
            }
        }
    
    }
    randomize(){
        for(let i = 0; i<this.rows; i++){
            for(let j = 0; j<this.cols; j++){
                // the rumber is between 0 ~ 9
                // this.data[i][j] = Math.floor(Math.random()*2-1);
                this.data[i][j] = Math.random()*2-1;
            }
        }
    }
    print(){
        console.table(this.data);
    }
}