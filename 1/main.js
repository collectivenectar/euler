// sum of all multiples of 3 or 5 below 1000

var sumOfAllMultiplesOf3 = 0;
var sumOfAllMultiplesOf5 = 0;

function checkMultiplesFive(){
    for (let i = 0; i < 1000; i++){
        if (i % 5 == 0){
            sumOfAllMultiplesOf5 += i;
        }
    
    }
}
function checkMultiplesThree(){
    for (let i = 0; i < 1000; i++){
        if (i % 3 == 0){
            sumOfAllMultiplesOf3 += i;
        }
    }
}
function testing(){
    console.log("hello");
}
checkMultiplesFive();
checkMultiplesThree();
console.log(sumOfAllMultiplesOf3, ", ", sumOfAllMultiplesOf5)