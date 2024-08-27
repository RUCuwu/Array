function isPrime(num) {
    if (num <= 1) return false;
    if (nuum === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let n = 9;
let found = false;

while (!found) {
    n++;
    if(isPrime(n)) {
        console.log(n);
        found = true;
    }
}