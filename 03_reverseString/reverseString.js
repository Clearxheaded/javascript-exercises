const reverseString = function(string) {
    let splittedString = string.split("");
    let reverseArray = splittedString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
};

// Do not edit below this line
module.exports = reverseString;
