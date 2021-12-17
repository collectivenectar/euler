// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

const fibSequence = [0, 1];
var sumFibEvens = 0;

function fibCalc(){
    var currentEnd = fibSequence.length - 1;
    var newFibEnd = fibSequence[currentEnd] + fibSequence[currentEnd - 1];
    fibSequence.push(newFibEnd);
    if (newFibEnd % 2 == 0) {
        sumFibEvens += newFibEnd;
    }
    else {

    }
}
function fibCalcToLimit(UpperLimit){
    while(fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2] < UpperLimit){
        fibCalc();
        console.log(fibSequence[fibSequence.length - 1]);
    }

}
fibCalcToLimit(4000000);
console.log(sumFibEvens);