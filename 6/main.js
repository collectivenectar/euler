//The sum of the squares of the first ten natural numbers is 1^2 + 2^2 + 3^2, + ... = 385
//The square of the sum of the first ten natural numbers is (1 + 2 + 3 + ...)^2 = 3025
// 3025 - 385 = 2640
//Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum
function diffSumSqrSqrSum(number){
    let sumSquares = 0;
    let sum = 0;
    let squareSum = 0;
    for (let i = 1; i < number + 1; i++){
        sumSquares += i * i;
        sum += i;
    }
    squareSum = sum * sum;
    console.log(squareSum, ", ", sumSquares);
    console.log(squareSum - sumSquares);
}
diffSumSqrSqrSum(100);