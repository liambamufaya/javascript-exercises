const removeFromArray = function(theObject, ...number) {
    const newarray = theObject.filter((item) => !number.includes(item));
    return newarray

};

// Do not edit below this line
module.exports = removeFromArray;
