const sumAll = function(a, b) {
let result = 0;
if (typeof a === "number" && typeof b === "number") {
    if (b > a && a >= 0) {
        for (let i = a; i <= b; i++) {
            result += i;
    };
    return result;
    }
    else if (a > b && b >= 0) {
        for (let i = b; i <= a; i++) {
            result += i;
    };
        return result;
    }
    else {
        return "ERROR";
    };
}
else {
    return "ERROR";
}


};

// Do not edit below this line
module.exports = sumAll;
