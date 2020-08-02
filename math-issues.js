// Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

// Here is a list of functions, we need:

// Math.round()
// Math.ceil()
// Math.floor()

const myNum = 55;



console.log(
  "Round: ", Math.round(myNum),
  "Ceil: ", Math.ceil(myNum),
  "Floor: ", Math.floor(myNum)
);

Math.round = function(number) {
  if(!number.toString().includes(".")){
    return number;
  };
  return +number.toString().split('.')[1].split('')[0] > 4 ?  +number.toString().split('.')[0] + 1: +number.toString().split('.')[0]; // TODO: fix this
};

Math.ceil = function(number) {
  if(!number.toString().includes(".")){
    return number;
  };
  return +number.toString().split('.')[0] + 1; 
};

Math.floor = function(number) {
  if(!number.toString().includes(".")){
    return number;
  };
  return +number.toString().split('.')[0];
};



console.log(
  "Round: ", Math.round(myNum),
  "Ceil: ", Math.ceil(myNum),
  "Floor: ", Math.floor(myNum)
);