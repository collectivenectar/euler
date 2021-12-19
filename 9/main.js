//A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

//a^2 + b^2 = c^2
//For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

//There exists exactly one Pythagorean triplet for which a + b + c = 1000.
//Find the product abc.
//starting at 1, let a = 1;
//assuming a = 1, what would b and c be?
//assuming b > a, what would c be? iterate through possibilities
//check using a^2 + b^2 = c^2

function tryNumber(limit){
    for (let a = 1; a < (limit / 3); a ++){
        for (let b = a; b < (limit / 2); b ++){
            c = limit - b - a;
            if ((a * a) + (b * b) == (c * c)){
                console.log(a, ", ", b, ", ", c);
                console.log(a*b*c);
            }
        }
    }
}
tryNumber(1000);