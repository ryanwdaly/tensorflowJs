function setup() {
    noCanvas();
    


    // const tense = tf.tensor3d(values, shape, "int32")

    // // values are immutable, use .variable to pass tensor into a variable that can be changed
    // const vtense = tf.variable(tense);

    // tense.data().then(function(stuff) {
    //     console.log(stuff);
    // })
    // tense.print();
    // console.log(tense.dataSync());

    //math using tensor
}

function draw() {
    const values = [];
    for (let i = 0; i < 15; i++) {
        values[i] = random(0, 100);
    }

    tf.tidy(myStuff);

    function myStuff() {
        const shape = [5, 3];
        const a = tf.tensor2d(values, shape, "int32");
        const b = tf.tensor2d(values, shape, "int32"); 
        const b_t = b.transpose();
        
        const c = a.matMul(b_t);
    }

    // //once something important is done, dispose of the tensors to prevent memory leak
    // a.dispose();
    // b.dispose();
    // c.dispose();
    // b_t.dispose();
    // console.log("hello")

    console.log(tf.memory().numTensors);
    
}