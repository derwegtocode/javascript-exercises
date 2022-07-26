const palindromes = function (stringy) {
    let stringCheck = /[^A-Za-z]/g;
    let stringyChecked = stringy.toLowerCase().replace(stringCheck, '');
    let reversedStringy = stringyChecked.split('').reverse().join('');
    return stringyChecked === reversedStringy;

};

// Do not edit below this line
module.exports = palindromes;
