// Write a function called repeatString which repeats the given 
// string src exactly count times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"


function repeatStr(n, s) {
    return s.repeat(n);
}

const result = repeatStr(6, "String");
console.log(result);