const repeatString = function(string, num) {
    let message = "";
    for (let i = 1; i <= num; i++){
       message += string;
    }
    if (num < 0) {
        return "ERROR";
    }
    else if (num === 0) {
        return "";
    }
    else {
        return message; 
    }
    
};

// Do not edit below this line
module.exports = repeatString;
