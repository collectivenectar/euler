// Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
//How many such routes are there through a 20×20 grid?

const { add } = require("mathjs");

// for a 5 x 5 grid, pascals triangle can be used by calculating the 9th row, middle value
// for a 20 x 20 grid, :

let pascalArray = [[1], [1, 1]];

// 1
// 1 1
// 1 2 1
// 1 3 3 1
// 1 4 6 4 1
// 1 5 10 10 5 1
// 1 6 15 20

function pascalCreator(){
    for (let i = 2; i <= 40; i++){
        let previousSet = pascalArray[i - 1];
        //starting at the 3rd set, creating i elements for each added array
        let additionalSet = [];
        //add i elements one at a time, n = previousSet[n] + previousSet[n - 1];
        //accounting for endpoints;
        for (let j = 0; j < i + 1; j++){
            // if the current element position is larger than the previousSet.length
            if (j + 1 <= previousSet.length){
                if (j == 0){
                    additionalSet.push(1);
                }
                else {
                    let newElement = previousSet[j] + previousSet[j - 1];
                    additionalSet.push(newElement);
                }
            } else {
                additionalSet.push(1);
            }
        }
        //add this set to the array
        pascalArray.push(additionalSet);
    }
}
pascalCreator();
console.log(pascalArray[40][20]);