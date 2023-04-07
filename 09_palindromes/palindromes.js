const palindromes = function (string) {
    string = string.toLowerCase().replace(/[^a-z]/g, ""); ///reemplaza espacios en blancos por una string vacia 
    const strReverse = string.split("").reverse().join("");
    return string == strReverse;
    
};

// Do not edit below this line
module.exports = palindromes;
