// Your task is to remove all consecutive duplicate words from string, leaving only first words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta alpha beta gamma delta'

const removeConsecutiveDuplicates = s => {
    return s.split(' ').filter((word, index, array) => word !== array[index -1]).join(' ');
};

const result = removeConsecutiveDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta');
console.log(result);


