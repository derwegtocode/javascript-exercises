const fibonacci = function(num) {
let fiboArray = [1, 1];

if (num <= 0) {
    return "OOPS";
}
else {
   for (let i = 0; i < num; i++) {
let fibo = fiboArray[i] + fiboArray[i+1];
fiboArray.push(fibo);
};
return fiboArray[num-1]; 
};

};


// Do not edit below this line
module.exports = fibonacci;
