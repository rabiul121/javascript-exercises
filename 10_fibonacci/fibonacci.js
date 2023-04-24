const fibonacci = function(num) {
    const serial = parseInt(num);
    if (serial < 0) {
        return "OOPS";
    }
    else if (serial <= 1) {
        return serial;
    } else {
        return fibonacci(serial - 1) + fibonacci(serial - 2);
    }
};

// Do not edit below this line
module.exports = fibonacci;

