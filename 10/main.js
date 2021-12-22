//The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
//Find the sum of all the primes below two million.

var primeNumbers = [2, 3, 5, 7];
var primeSum = 17;


function primeChecker(limit){
    for (let i = 11; i <= limit - 1; i ++){
        for (let j = 0; j <= primeNumbers.length - 1; j++){
            if (i % primeNumbers[j] == 0){
                break;
            }
            else {
                if (j == primeNumbers.length - 1){
                    primeNumbers.push(i);
                    primeSum += i;
                }
            }
        }
    }
}
primeChecker(2000000);
console.log(primeSum);