let A = [1,2,3,4,5,6,7,8,9,10];
let B;
console.log(A);
B = reverseArray(A);
console.log(B);

function reverseArray(array) {
    array_length = array.length - 1;
    if (array.length % 2 == 1) {
        array_length = Math.floor(array.length);
    }
    for(let i = 0; i<= array_length / 2; ++i)
    {
        temp = A[i];                                    
        A[i] = A[array_length - i];                     
        A[array_length - i] = temp;                                        
    }
    return A;  
}