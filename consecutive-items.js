// You are given a list of unique integers arr, and two integers a and b. 
// Your task is to find out whether or not a and b appear consecutively in 
// arr, and return a boolean value (True if a and b are consecutive, False otherwise).

// It is guaranteed that a and b are both present in arr.

function consecutive(arr, a, b) {

    if( arr.indexOf(a) < 0 ){
        console.log('this');
        return false
    }

    return arr[arr.indexOf(a) - 1] === b || arr[arr.indexOf(a) + 1] === b;
}

const result = consecutive([1, 12, 5, 7], 7, 1);

console.log(result);