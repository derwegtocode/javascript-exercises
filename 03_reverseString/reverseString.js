const reverseString = function(string) {
let reversedArray = Array.from(string);
let reversedString = reversedArray.reverse();
reversedString.toString();
return reversedString.join("");
};

// Do not edit below this line
module.exports = reverseString;
