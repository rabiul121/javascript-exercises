const palindromes = function (str) {
    inpStr = str.toString().replace(/[^\d\w]/g, "").toLowerCase();
    revStr = inpStr.split("").reverse().join("");
    return inpStr === revStr;
};

// Do not edit below this line
module.exports = palindromes;
