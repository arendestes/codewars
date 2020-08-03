// Task:
// You have to write a function pattern which returns the following Pattern(See Examples) upto (2n-1) rows, 
// where n is parameter.

// Rules/Note:
// If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.
// All the lines in the pattern have same length i.e equal to the number of characters in the longest line.
// Range of n is (-∞,100]
// Examples:
// pattern(5):

//     1    
//    121   
//   12321  
//  1234321 
// 123454321
//  1234321 
//   12321  
//    121   
//     1    
// pattern(10):

//          1         
//         121        
//        12321       
//       1234321      
//      123454321     
//     12345654321    
//    1234567654321   
//   123456787654321  
//  12345678987654321 
// 1234567890987654321
//  12345678987654321 
//   123456787654321  
//    1234567654321   
//     12345654321    
//      123454321     
//       1234321      
//        12321       
//         121        
//          1         
// pattern(15):

//               1              
//              121             
//             12321            
//            1234321           
//           123454321          
//          12345654321         
//         1234567654321        
//        123456787654321       
//       12345678987654321      
//      1234567890987654321     
//     123456789010987654321    
//    12345678901210987654321   
//   1234567890123210987654321  
//  123456789012343210987654321 
// 12345678901234543210987654321
//  123456789012343210987654321 
//   1234567890123210987654321  
//    12345678901210987654321   
//     123456789010987654321    
//      1234567890987654321     
//       12345678987654321      
//        123456787654321       
//         1234567654321        
//          12345654321         
//           123454321          
//            1234321           
//             12321            
//              121             
//               1     

function pattern(n) {
    let patern = [];
    for (let i = n; i > 0; i--) {
        let output = [];
        for (let j = i; j > 0; j--) {
            let endJ = j.toString().split('')[j.toString().length - 1];
            if (j === i) {
                output.push(endJ);
            } else {
                output.push(endJ);
                output.unshift(endJ);
            };
        }
        for (let k = n - i; k > 0; k--) {
            output.push(' ');
            output.unshift(' ');
        }
        output = output.join('');
        if (i === n) {
            patern.push(output);
        } else {
            patern.push(output);
            patern.unshift(output);
        };
    };

    return patern.join('\n');
}

const result = pattern(15);
console.log(result);