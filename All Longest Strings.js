/*Given an array of strings,
return another array containing all of its longest strings.

Example

For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

Array of the longest strings, stored in the same order as in the inputArray.*/

function allLongestStrings(inputArray) {
    const length = inputArray.sort((a, b) => b.length - a.length)[0].length;
    return inputArray.filter(word => word.length === length);
}