// sum of all multiples of 3 or 5 below 1000

var sumOfAll = 0;

function checkMultiplesFiveAndThree(endpoint){
    for (let i = 0; i < endpoint; i++){
        if (i % 3 == 0){
            sumOfAll += i;
        } else if (i % 5 == 0){
            sumOfAll += i;
        }
    }
}
checkMultiplesFiveAndThree(1000)
console.log(sumOfAll)