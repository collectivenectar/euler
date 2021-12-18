// largest product of two 3-digit numbers that results in a palindrome

let palindromes = [];
let largestPair = [0, 0];

function checkPalindrome(number){
    let stringNumber = number.toString();
    let numberSplitArray = stringNumber.split("");
    let numberSplitArrayReversed = numberSplitArray.reverse();
    let numberReversedJoined = numberSplitArrayReversed.join("");
    if (numberReversedJoined == number) {
        return "palindrome"
    } else {
        return "non-palindrome";
    }
}
function palindromeChecker(numberone, numbertwo){
    let product = numberone * numbertwo;
    let productChecked = checkPalindrome(product);
    if (productChecked == "palindrome"){
        let numberSet = [numberone, numbertwo];
        palindromes.push(numberSet);
    }
    else{

    }
}
function numberPairGenerator(){
    for (let i = 600; i < 1000; i ++){
        for (let j = 600; j < 1000; j ++){
            palindromeChecker(i, j);
        }
    }
}
numberPairGenerator();
console.log(palindromes[palindromes.length - 1]);