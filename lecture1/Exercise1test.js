let A = [3,4,20,86,100,-3,8,26,15,77];
let B = [1,3,2];
let C = [6,5,4];

least_num(C);

function least_num(array) {
    if (array.length <= 1) {
        return NULL;
    }
    let min1 = array[0];
    let min2 = array[1];

    if (min1 < min2) {
       min1 = array[1];
       min2 = array[0]; 
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] < min1) {
            min2 = min1;
            min1 = array[i];
        }
        else if (array[i] < min2) {
            min2 = array[i];
        }
    }

    console.log(`min1: ${min1} min2: ${min2}`);
}