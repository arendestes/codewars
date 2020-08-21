// It's the academic year's end, fateful moment of your school report. 
// The averages must be calculated. All the students come to you and entreat 
// you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

//[1,2,3,4,5,]=> 3

function getAverage(marks) {
    //TODO : calculate the downwar rounded average of the marks array
    return Math.floor(marks.reduce((acc, cur) => acc + cur) / marks.length);
}

const result = getAverage([1,2,3,4,5,]);

console.log(result);