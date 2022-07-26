const findTheOldest = function(theArray) {
let oldest = 0;
let age;
let oldestPerson;
let currentYear = new Date().getFullYear();
for (let i = 0; i < theArray.length; i++) {
    if (theArray[i].yearOfDeath) {
        age = theArray[i].yearOfDeath - theArray[i].yearOfBirth;
        theArray[i].Age = age;
    }
    else {
        age = currentYear - theArray[i].yearOfBirth;
        theArray[i].Age = age;
    }
    if (age > oldest) {
        oldest = age;
        oldestPerson = theArray[i];
    }
};
return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
