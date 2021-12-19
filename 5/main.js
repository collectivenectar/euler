//2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
var smallestDivisibleNumber = 0;

function numberChanger(){
    for (let i = 1; i < 1000000000; i++){
        divisorChecker(i);
    }
}
function divisorChecker(number){
    var outOfTwentyScore = 0;
    for (let i = 1; i < 21; i++){
        if (number % i == 0){
            outOfTwentyScore += 1;
            if (outOfTwentyScore == 20){
                console.log(number);
            }
        } else if (number % i != 0){
            break;
        }


    }
}

numberChanger();
console.log(smallestDivisibleNumber);
