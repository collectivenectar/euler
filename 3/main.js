// Largest prime factor of 600851475143?

var primeFactors = [1];
var found = false;

function factorPrimes(number){
    let start = primeFactors[primeFactors.length - 1] + 1;
    for (let i = start; i < number; i ++ ){
        if( number % i == 0){
            primeFactors.push(i);
            break;
        }
    }
}
factorPrimes(600851475143);
factorPrimes(600851475143);
factorPrimes(600851475143);
factorPrimes(600851475143);
console.log(primeFactors);