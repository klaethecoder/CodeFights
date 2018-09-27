/*Algorithm: You are given a two - digit integer n.Return the sum of its digits.
 Example: For n = 29, the output should be addTwoDigits(n) = 11.
*/

/* ES6 Solution using the spread Operator to create an Array and the reduce
 method to iterate over each element and get the sum of the two digits*/

function addTwoDigits(n) {
    return [...String(n)].reduce((sum, value) => Number(sum) + Number(value))
}

/* Here is another way that you can split the two digits apart 
so that you can add them together*/
function addTwoDigits(n) {
    return n.toString().split('').reduce(
        function sumOfString(sum, value) {
            return Number(sum) + Number(value)
        });
}