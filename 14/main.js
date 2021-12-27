// The following iterative sequence is defined for the set of positive integers:

// n → n/2 (n is even)
// n → 3n + 1 (n is odd)

// Using the rule above and starting with 13, we generate the following sequence:

// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

// Which starting number, under one million, produces the longest chain?

// NOTE: Once the chain starts the terms are allowed to go above one million.
let longestChain = 0;
let longestChainNumber = 0;


function incrementNumber(somelimit){
  for (let i = 1; i < somelimit; i++){
    calculateChainLength(i);
  }
}

function calculateChainLength(somenumber){
  let chainLength = 1;
  let chainLink = 0;
  chainLink += somenumber;
  do {
    if (chainLink % 2 == 0){
      chainLength += 1;
      chainLink /= 2;
    } else {
      chainLength += 1;
      let newValue = (3 * chainLink) + 1;
      chainLink = newValue;
  }} while (chainLink > 1);
  if (chainLength > longestChain){
    longestChain = chainLength;
    longestChainNumber = somenumber;
  }
}

incrementNumber(1000000);
console.log(longestChainNumber, ", ", longestChain);
