const removeFromArray = function (arr, ...num) {
    let removeItems = [...num];
    return arr.filter(item => !removeItems.includes(item));
};

console.log(removeFromArray([1, 2, 3], 2, 3));

// Do not edit below this line
module.exports = removeFromArray;
