// Definition
// Disarium number is the number that The sum of its digits 
// powered with their respective positions is equal to the number itself.

// Task
// Given a number, Find if it is Disarium or not .

// Warm-up (Highly recommended)
// Playing With Numbers Series
// Notes
// Number passed is always Positive .
// Return the result as String
// Input >> Output Examples
// disariumNumber(89) ==> return "Disarium !!"
// Explanation:
// Since , 8^1 + 9^2 = 89 , thus output is "Disarium !!"
// disariumNumber(564) ==> return "Not !!"
// Explanation:
// Since , 5^1 + 6^2 + 4^3 = 105 != 564 , thus output is "Not !!"



function disariumNumber(n) {
    const numberString = n.toString();
    let total = numberString.split('').reduce((acc, curr, index) => {
        return curr ** (index +1) + acc;
    }, 0);
    
    
    return total === n ? "Disarium !!": "Not !!";
}

const result = disariumNumber(89);

console.log(result);