const removeFromArray = function(array, ...otherArgs) {
let newArray = array.filter(item => !otherArgs.includes(item));
return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
