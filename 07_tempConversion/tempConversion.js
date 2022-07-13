const ftoc = function(fTemp) {
let celcius = ((fTemp - 32) * (5/9));
if (!Number.isInteger(celcius)) {
  celcius = celcius.toFixed(1);
  return Number(celcius);
}
else {
  return celcius;
};

};

const ctof = function(cTemp) {
let far = (cTemp * (9/5) + 32);
if (!Number.isInteger(far)) {
  far = far.toFixed(1);
  return Number(far);
}
else {
  return far;
};

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};