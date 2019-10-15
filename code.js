// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
    // var input = parseFloat(input);
    if ((typeof input !== "string") || (input.length === 0)) {
        return "Hello, World!"
    } else return ("Hello, " + input + "!");
}

// if (input === "Alex") {
//     return "Hello, Alex!"
// } else if (input === "Pat") {
//     return "Hello, Pat!"
// } else
//     return "Hello, Jane!";

function isFive(num) {
    if (num === 5) {
        return true
    } else return false
}

function isEven(num) {
    var num = parseFloat(num);
    if (num % 2 === 0) {
        return true
    } else return false
}

function isVowel(input){
    if ((input === "A") || (input === "E") || (input === "I") || (input === "O") || (input === "U") || (input === "a") || (input === "e") || (input === "i") || (input === "o") || (input === "u")) {
        return true;
    } else return false
}