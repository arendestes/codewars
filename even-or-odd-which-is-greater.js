// Given a string of digits confirm whether the sum of all the individual even digits are 
// greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.

// If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

// If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

// If the total of both even and odd numbers are identical return: "Even and Odd are the same"

function evenOrOdd(str) {
    const evenOddTotals = str.split('').map(num => +num).reduce((prev, curr) => {

        if (curr % 2 === 0) {
            prev[0] += curr
        } else {
            prev[1] += curr
        }
        return prev;
    }, [0, 0]);

    return evenOddTotals[0] > evenOddTotals[1] ? "Even is greater than Odd" : evenOddTotals[0] < evenOddTotals[1] ? "Odd is greater than Even" : "Even and Odd are the same";
}

const result = evenOrOdd('1111112');

console.log(result);