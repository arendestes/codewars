// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

// Example

// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

function sortArray(array) {
    let oddIndex = [];
    let odd = [];
    let even = [];
    array.forEach((num, index) =>{
        if ( num % 2 !== 0 ){
            odd.push(num);
            oddIndex.push(index);
        } else {
            even.push(num);
        }
    })
    odd.sort((a,b)=> a - b);
    odd.forEach((oddNum, index) => {
        even.splice(oddIndex[index], 0, oddNum);
    })
    return even;
}

const result = sortArray([15, 3, 2, 8, 1, 4]);

console.log(result);

