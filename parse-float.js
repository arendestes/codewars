// Write function parseF which takes an input and returns a 
// number or null if conversion is not possible. The input can 
// be one of many different types so be aware.

function parseF(s) {
    return Number.parseFloat(s) || s === 0 || s === '0'? Number.parseFloat(s): null;
}

const result = parseF(0);
console.log(result);