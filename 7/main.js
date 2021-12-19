//By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
//What is the 10 001st prime number?

// if a number cannot be divided by 2 or any previous prime, then it is a prime
var primeNumbers = [2, 3, 5, 7, 11, 13];

function numberGenerator(){
    for (let i = 14; i < 100000000; i ++){
        if (primeNumbers.length < 10001){
            primeChecker(i);
        }
        else {
            console.log(primeNumbers[10000])
            break;
        }
    }
}
function primeChecker(number){
    for (let i = 0; i <= primeNumbers.length - 1; i ++){
        if (number % primeNumbers[i] == 0){
            break;
        }
        else {
            if (i == primeNumbers.length - 1){
                primeNumbers.push(number);
            }
        }
    }
}
numberGenerator();