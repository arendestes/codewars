// This time we want to write calculations using functions and get the results. Let's have a look at some examples:


// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Divison should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3


function zero(callBack) {
    if (callBack){
        return callBack(0);
    } else {
        return 0;
    }
};
function one(callBack) {
    if (callBack){
        return callBack(1);
    } else {
        return 1;
    }
};
function two(callBack) {
    if (callBack){
        const secNum = 2;
        return callBack(2);
    } else {
        return 2;
    }
};
function three(callBack) {
    if (callBack){
        return callBack(3);
    } else {
        return 3;
    }
};
function four(callBack) {
    if (callBack){
        return callBack(4);
    } else {
        return 4;
    }
};
function five(callBack) {
    if (callBack){
        return callBack(5);
    } else {
        return 5;
    }
};
function six(callBack) {
    if (callBack){
        return callBack(6);
    } else {
        return 6;
    }
};
function seven(callBack) {
    if (callBack){
        return callBack(7);
    } else {
        return 7;
    }
};
function eight(callBack) {
    if (callBack){
        return callBack(8);
    } else {
        return 8;
    }
};
function nine(callBack) {
    if (callBack){
        return callBack(9);
    } else {
        return 9;
    }
};

function plus(num) {return (secNum) => secNum + num };
function minus(num) {return (secNum) => secNum - num };
function times(num) {return (secNum) => secNum * num };
function dividedBy(num) {return (secNum) => secNum / num };

console.log(one(plus(three())));
console.log(seven(times(five()))); // must return 35
console.log(four(plus(nine()))); // must return 13
console.log(eight(minus(three()))); // must return 5
console.log(six(dividedBy(two()))); // must return 3