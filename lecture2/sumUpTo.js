sumUpTo(50)
console.log(sumUpTo2(50))

function sumUpTo(n){
    s = 0;
    for (let i = 1; i <= n; i++) {
        s += i;
    }
    console.log(s);
}

function sumUpTo2(n) {
    return (n*(n+1))/2;
}