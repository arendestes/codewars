// In this Kata, you will be given an array of strings and your task is to remove 
// all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

// dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be lowercase only, no spaces. See test cases for more examples.

// Good luck!

function dup(s) {

    const noDup = [];
    for ( let i = 0; i < s.length; i++ ){
        let previousLetter = '';
        let noDupStr = '';
        for ( let j = 0; j < s[i].length; j++ ){
            const currentLetter = s[i][j]
            if ( previousLetter !== currentLetter ){
                noDupStr += currentLetter;
                previousLetter = currentLetter;
            }
        }
        noDup.push(noDupStr);
    }

    return noDup;
};

const result = dup(["abracadabra","allottee","assessee"]);

console.log(result);